import React, {useState} from 'react';
import {View, Text, TextInput, ToastAndroid, ActivityIndicator} from 'react-native';
// styles
import styleGenerator from './styles';
// local
import {RectButton} from "react-native-gesture-handler";
import RateSlider from "./RateSlider/RateSlider";
import {Rate} from "../../store/types";
import {postComment, postCommentText} from "../../library/api";
import {auth, Colors} from "../../../ball-library";
import {dismissRatingOverlay} from "../../library/nav";
import * as Yup from "yup";
import BallInput from "../../../authentication2/components/BallInput";
import SubmitButton from "../../../authentication2/components/SubmitButton";
import {Formik} from "formik";


const ConfirmSchema = Yup.object().shape({
	comment: Yup.string()
			.min(3, 'بسیار کوتاه')
			.required('وارد کردن این فیلد الزامی ست')
});

interface IRating {
	rateItems: Array<Rate>,
	sportId: string,
	sportType: string
}

const Rating = (props: IRating) => {
	const styles = styleGenerator();
	const {rateItems, sportId, sportType} = props;

	const [loading, setLoading] = useState<boolean>(false);

	const [rate1, setRate1] = useState<number>(0);
	const [rate2, setRate2] = useState<number>(0);
	const [rate3, setRate3] = useState<number>(0);
	const [rate4, setRate4] = useState<number>(0);


	const handleRatingOverlay = async (values: any) => {
		await setLoading(true);
		let res = await postComment(auth.getToken(), sportId, sportType, rate1, rate2, rate3, rate4, 5);
		if (res.state === 'success') {
			ToastAndroid.show('امتیاز شما با موفقیت ثبت شد', ToastAndroid.SHORT)
		} else {
			ToastAndroid.show('خطای سرور', ToastAndroid.SHORT)
		}

		let res2 = await postCommentText(auth.getToken(), values.comment, sportId);
		if (res2.state === 'success') {
			await setLoading(false);
			ToastAndroid.show('نظر شما با موفقیت ثبت شد', ToastAndroid.SHORT);
			await dismissRatingOverlay()
		} else {
			await setLoading(false);
			ToastAndroid.show('خطای سرور', ToastAndroid.SHORT)
		}
	};

	return (
			<View style={styles.container}>
				{/*{
					rateItems.map((value, index) => {
						return (
								<RateSlider key={index} name={value.name} value={rates[index + 1]} onChangeRate={}/>
						)
					})
				}*/}

				<RateSlider name={rateItems[0].name} value={rate1} onChangeRate={(value) => setRate1(value)}/>
				<RateSlider name={rateItems[1].name} value={rate2} onChangeRate={(value) => setRate2(value)}/>
				<RateSlider name={rateItems[2].name} value={rate3} onChangeRate={(value) => setRate3(value)}/>
				<RateSlider name={rateItems[3].name} value={rate4} onChangeRate={(value) => setRate4(value)}/>


				<Formik
						initialValues={{comment: ''}}
						validationSchema={ConfirmSchema}
						onSubmit={handleRatingOverlay}
				>
					{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
							<View style={{width: '100%'}}>
								<View style={styles.comment_box}>
									<TextInput multiline={true} placeholder={'نظر شما ...'} style={styles.comment_input}
									           value={values.comment}
									           onChangeText={handleChange('comment')} onBlur={handleBlur('comment')}/>
								</View>
								{errors.comment && touched.comment ? (
										<Text style={styles.error_text}>{errors.comment}</Text>
								) : null}
								<RectButton style={styles.submit_button} onPress={handleSubmit}>
									{!loading && <Text style={styles.submit_text}>ثبت</Text>}
									{loading && <ActivityIndicator size={'small'} color={Colors.whiteBall}/>}
								</RectButton>
							</View>

					)}
				</Formik>

			</View>
	);
};

export default Rating;
