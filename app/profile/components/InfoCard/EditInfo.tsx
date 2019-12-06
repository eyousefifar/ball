import React from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import {auth, userProfile} from '../../../ball-library';
import {observer} from 'mobx-react-lite';

// styles
import {editInfoStyle as styleGenerator} from './styles';
import {RectButton} from "react-native-gesture-handler";
import BallInput from "../../../authentication2/components/BallInput";
import SubmitButton from "../../../authentication2/components/SubmitButton";
import {Formik} from "formik";
import * as Yup from "yup";
import {editProfile} from "../../library/api";

const phoneRegex: RegExp = /(\+98?)?{?(0?9[0-9]{9,9}}?)/;


const EditSchema = Yup.object().shape({
	name: Yup.string()
			.min(3, 'بسیار کوتاه')
			.max(80, 'بیشتر از حد مجاز')
			.required('وارد کردن این فیلد الزامی ست'),

});

interface IEditInfo {
	setEditInformationOff: () => void,
}

const EditInfo = (props: IEditInfo) => {
	const styles = styleGenerator();

	const {setEditInformationOff} = props;
	const submitConfirmCode = async (values: any) => {
		let token = await auth.getToken();

		let res = await editProfile(token, values.name);

		if (res.state === 'success') {
			await userProfile.setUserName(values.name);
			await userProfile.getUserNameFromDb();
			await ToastAndroid.show('نام شما با موفقیت تغییر کرد', ToastAndroid.SHORT);

			setEditInformationOff()
		}else {
			await ToastAndroid.show('خطای سرور لطفا بعدا دوباره امتحان کنید', ToastAndroid.SHORT);
		}
	};


	return (
			<Formik
					initialValues={{name: ''}}
					validationSchema={EditSchema}
					onSubmit={submitConfirmCode}
			>
				{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
						<View style={styles.container}>
							<View style={styles.fields_container}>
								<BallInput value={values.name} onChangeText={handleChange('name')} inputBlur={handleBlur('name')}
								           label={'نام و نام خانوادگی'} keyboardType={'default'}/>
								{errors.name && touched.name ? (
										<Text style={styles.error_text}>{errors.name}</Text>
								) : null}
							</View>
							<View style={styles.buttons_container}>

								<View style={styles.submit_button_container}>
									<RectButton style={styles.submit_button} onPress={handleSubmit}>
										<Text style={styles.submit_button_text}>تایید</Text>
									</RectButton>
								</View>
								<View style={styles.cancel_button_container}>
									<RectButton style={styles.submit_button} onPress={setEditInformationOff}>
										<Text style={styles.submit_button_text}>لغو</Text>
									</RectButton>
								</View>

							</View>
						</View>
				)}
			</Formik>
	);
};

export default observer(EditInfo);

