import React, {useState} from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {observer} from 'mobx-react';
import {defaultTheme, Header} from '../../../ball-library';
import {dismissRegisterScreen} from '../../library/nav';
// styles
import styleGenerator from './styles';
// local
import BackgroundAuth from '../../components/Background'
import BallInput from '../BallInput'
import SubmitButton from "../SubmitButton";
import {Formik} from "formik";
import * as Yup from "yup";
import {signUpCustomer} from "../../library/api";
import {Navigation} from "react-native-navigation";

interface IRegisterPage {
    confirmKey: string,
    phone: string
}


const ConfirmSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'بسیار کوتاه')
        .max(100, 'بیشتر از حد مجاز')
        .required('وارد کردن این فیلد الزامی ست'),
});

const RegisterPage = (props: IRegisterPage) => {

    const styles = styleGenerator();
    const {confirmKey, phone} = props;

    const [loading, setLoading] = useState<boolean>(false);

    const registerUser = async (values: any) => {
        await setLoading(true);
        let res = await signUpCustomer(confirmKey, values.name, phone);
        if (res.state === 'success') {
            // 1000 ms delay
            await setTimeout(() => {
            }, 1000);

            await setLoading(false);

            await Navigation.dismissAllModals()

            // await dismissRegisterScreen();
            // await dismissConfirmScreen();
            // await dismissAuthScreen();
        } else {
            setLoading(false);
            ToastAndroid.show(res.message,ToastAndroid.LONG)
        }
    };

    return (
        <Provider theme={defaultTheme}>
            <View style={styles.container}>
                <Header
                    title={'ثبت نام'}
                    backgroundColor={'transparent'}
                    mode={'fullWidth'}
                    drawBehind
                    onPress={dismissRegisterScreen}
                />
                <KeyboardAwareScrollView
                    style={{flex: 1}}
                    enableOnAndroid
                    keyboardShouldPersistTaps={'always'}>
                    <BackgroundAuth/>

                    <Formik
                        initialValues={{name: ''}}
                        validationSchema={ConfirmSchema}
                        onSubmit={registerUser}>
                        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                            <View style={styles.input_container}>
                                <BallInput label={'نام و نام خانوادگی'} inputBlur={handleBlur('name')}
                                           value={values.name}
                                           onChangeText={handleChange('name')} keyboardType={"default"}/>
                                {errors.name && touched.name ? (
                                    <Text style={styles.error_text}>{errors.name}</Text>
                                ) : null}
                                <SubmitButton onClick={handleSubmit} label={'ثبت نام'} loading={loading}/>
                            </View>
                        )}
                    </Formik>

                </KeyboardAwareScrollView>
            </View>
        </Provider>
    );
};

export default observer(RegisterPage);
