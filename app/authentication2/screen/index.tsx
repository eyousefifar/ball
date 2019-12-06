import React, {useState} from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {observer} from 'mobx-react';
import {defaultTheme, Header} from '../../ball-library';
import {dismissAuthScreen, showConfirmScreen} from '../library/nav';
// styles
import styleGenerator from './styles';
// local
import BackgroundAuth from '../components/Background'
import BallInput from "../components/BallInput";
import SubmitButton from "../components/SubmitButton";
import {Formik} from "formik";
import * as Yup from "yup";
import {checkUserExists, loginCustomerSms, sendSmsToUserForSignUp} from "../library/api";

const phoneRegex: RegExp = /(\+98?)?{?(0?9[0-9]{9,9}}?)/;

const ConfirmSchema = Yup.object().shape({
	phone: Yup.string().matches(phoneRegex, 'شماره همراه معتبر نیست').min(11, 'بسیار کوتاه').max(12, 'بیشتر از حد مجاز').required('وارد کردن این فیلد الزامی ست'),
});

const Authentication = () => {
	const styles = styleGenerator();

	const [loading,setLoading] = useState<boolean>(false);


	const showRegisterOrLogin = async (values: any) => {
		// show loading
		await setLoading(true);

		let res = await checkUserExists(values.phone);

		if (res.state === 'success'){
			if (res.userExists) {
				// login section
				await loginSection(values.phone,res.userExists)

			} else {
				// signUp section
				await signUpSection(values.phone,res.userExists)
			}
		}else {
			await setLoading(false);
			ToastAndroid.show(res.message,ToastAndroid.LONG)
		}
	};

	const signUpSection = async (phoneNumber:string,isUserExist:boolean) => {
		let resSignUp = await sendSmsToUserForSignUp(phoneNumber);

		if (resSignUp.state === 'success') {
			await setLoading(false);
			await showConfirmScreen(isUserExist,phoneNumber)
		}else {
			await setLoading(false);
			ToastAndroid.show(resSignUp.message,ToastAndroid.LONG)
		}
	};

	const loginSection = async (phoneNumber:string,isUserExists:boolean) => {
		let resLogin = await loginCustomerSms(phoneNumber);
		if(resLogin.state === 'success'){
			await setLoading(false);
			await showConfirmScreen(isUserExists,phoneNumber)
		}else {
			await setLoading(false);
			ToastAndroid.show(resLogin.message,ToastAndroid.LONG)
		}
	};

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<Header
							title={'ورود و ثبت نام'}
							backgroundColor={'transparent'}
							mode={'fullWidth'}
							drawBehind
							onPress={dismissAuthScreen}
					/>
					<KeyboardAwareScrollView
							style={{flex: 1}}
							enableOnAndroid
							keyboardShouldPersistTaps={'always'}
							extraHeight={86}>

						<BackgroundAuth/>

						<Formik
								initialValues={{phone: ''}}
								validationSchema={ConfirmSchema}
								onSubmit={showRegisterOrLogin}
						>
							{({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
									<View style={styles.input_container}>
										<BallInput label={'شماره همراه'} inputBlur={handleBlur('phone')} value={values.phone}
										           onChangeText={handleChange('phone')} keyboardType={"numeric"}/>
										{errors.phone && touched.phone ? (
												<Text style={styles.error_text}>{errors.phone}</Text>
										) : null}
										<SubmitButton onClick={handleSubmit} label={'ورود'} loading={loading}/>
									</View>
							)}
						</Formik>

					</KeyboardAwareScrollView>
				</View>
			</Provider>
	);
};

export default observer(Authentication);
