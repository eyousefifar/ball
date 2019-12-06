import React,{useEffect,useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {Provider} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {observer} from 'mobx-react';
import {defaultTheme, Header} from '../../../ball-library';
import {Formik} from 'formik';
import * as Yup from 'yup'
import {dismissConfirmScreen, showRegisterScreen} from '../../library/nav';
// styles
import styleGenerator from './styles';
// local
import BackgroundAuth from '../../components/Background'
import BallInput from '../BallInput'
import SubmitButton from "../SubmitButton";
import {loginCustomer, verifyPhoneForSignUp} from "../../library/api";
import Timer from '../../components/Timer'
import {Navigation} from "react-native-navigation";


const ConfirmSchema = Yup.object().shape({
	confirmCode: Yup.string().
	required('وارد کردن این فیلد الزامی ست'),
});


interface IConfirmPage {
	isLogin: boolean,
	phone:string
}

const ConfirmPage = (props: IConfirmPage) => {

	const styles = styleGenerator();
	const {isLogin,phone} = props;

	const [loading,setLoading] = useState<boolean>(false);


	const submitConfirmCode = async (values: any) => {
		await setLoading(true);
		if (isLogin) {
			await loginSection(values.confirmCode)
		} else {
			await signUpSection(values.confirmCode)
		}
	};

	const signUpSection = async (confirmCode:string) => {
		let verifyResponse  = await verifyPhoneForSignUp(phone,confirmCode);
		if (verifyResponse.state === 'success'){
			let confirmKey = verifyResponse.message;
			// 1000 ms delay
			// await setTimeout(() => {}, 300);
			await setLoading(false);
			await showRegisterScreen(confirmKey,phone)
		}else {
			await setLoading(false);
			ToastAndroid.show(verifyResponse.message,ToastAndroid.LONG)
		}
	};

	const loginSection = async (confirmCode:string) => {
		let response = await loginCustomer(phone,confirmCode);
		if (response.state === 'success'){
			await setLoading(false);
			await Navigation.dismissAllModals();

			// await dismissConfirmScreen();
			// await dismissAuthScreen()
		}else {
			setLoading(false);
			ToastAndroid.show(response.message,ToastAndroid.LONG)
		}
	};

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<Header
							title={'تایید کد'}
							backgroundColor={'transparent'}
							mode={'fullWidth'}
							drawBehind
							onPress={dismissConfirmScreen}
					/>
					<KeyboardAwareScrollView
							style={{flex: 1}}
							enableOnAndroid
							keyboardShouldPersistTaps={'always'}>

						<BackgroundAuth/>

						<Formik
								initialValues={{confirmCode: ''}}
								validationSchema={ConfirmSchema}
								onSubmit={submitConfirmCode}
						>
							{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
									<View style={styles.input_container}>
										<BallInput label={'کد تایید'} inputBlur={handleBlur('confirmCode')}
										           value={values.confirmCode} maxLength={4}
										           onChangeText={handleChange('confirmCode')} keyboardType={'numeric'}/>
										<View style={styles.under_box}>
											<Timer minutes={'03'} />
											{/*<Text style={styles.timer}>ارسال مجدد پس از 00:{time}</Text>*/}
											{errors.confirmCode && touched.confirmCode ? (
												<Text style={styles.error_text}>{errors.confirmCode}</Text>
										) : null}
										</View>
										<SubmitButton onClick={handleSubmit} label={'ورود'} loading={loading}/>
									</View>
							)}
						</Formik>

					</KeyboardAwareScrollView>
				</View>
			</Provider>
	);
};

export default observer(ConfirmPage);
