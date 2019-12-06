import React, {useEffect} from 'react';
import {Provider} from 'react-native-paper';
import {View, Text, ToastAndroid, Keyboard, Linking} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton, TextInput} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Touchable, defaultTheme, Colors, auth} from '../../../ball-library';
import {dismissIncreaseCashOverlay, dismissWalletScreen, showPaymentModal} from "../../library/nav";
import {increaseWalletAmount} from "../../library/api";
import * as Yup from "yup";
import {Formik} from "formik";


const ConfirmSchema = Yup.object().shape({
    price: Yup.string()
        .min(2, 'بسیار کوتاه')
        .max(9, 'بیشتر از حد مجاز')
        .required('وارد کردن قیمت الزامی ست'),
});

const IncreaseCashOverlay = () => {

    const handleOpenUrl = (url:string) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                ToastAndroid.show('مشکلی در باز کردن صفحه پرداخت وجود دارد',ToastAndroid.SHORT)
            }
        });
    };

    const handleIncreaseCash = async (values:any) => {
        let resCash = await increaseWalletAmount(auth.getToken(),values.price);

        if(resCash.state === 'success'){
            Keyboard.dismiss();
            // await dismissIncreaseCashOverlay();
            // await showPaymentModal(resCash.link)
            await setTimeout(() => {},2000);
            await handleOpenUrl(resCash.link);
            await dismissIncreaseCashOverlay();
        }else {
            ToastAndroid.show(resCash.message,ToastAndroid.SHORT)
        }

    };

    /*useEffect(() => {
        Linking.getInitialURL().then((url) => {
            if (url) {
                console.warn('Initial url is: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));
    });*/

    const styles = styleGenerator();
    return (
        <Provider theme={defaultTheme}>
            <View style={styles.container}>
                <Touchable
                    style={{zIndex: -1}}
                    onPress={dismissIncreaseCashOverlay}
                    rippleColor={'lightGrey'}
                />
                <View style={styles.cardContainer}>

                    <View style={{paddingHorizontal: 32, paddingTop: 32, backgroundColor: '#fff'}}>
                        <Text style={styles.popup_text}>مبلغ مورد نظرتان را وارد کنید</Text>
                    </View>

                    <Formik
                        initialValues={{price: ''}}
                        validationSchema={ConfirmSchema}
                        onSubmit={handleIncreaseCash}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                            <View style={styles.input_container}>

                                <TextInput style={styles.price_input} placeholderTextColor={Colors.greenBall}
                                           placeholder={'برای مثال 20000 تومان'} keyboardType={'numeric'} value={values.price}
                                           onBlur={handleBlur('price')} onChangeText={handleChange('price')}/>

                                {errors.price && touched.price ? (
                                    <Text style={styles.error_text}>{errors.price}</Text>
                                ) : null}
                                <RectButton style={styles.reserve_button} onPress={handleSubmit}>
                                    <Text style={styles.reserve_button_text}>پرداخت</Text>
                                </RectButton>
                            </View>

                        )}
                    </Formik>




                </View>
            </View>
        </Provider>
    );
}

export default observer(IncreaseCashOverlay);
