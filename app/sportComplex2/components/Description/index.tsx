import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';

const Description = () => {

    const styles = styleGenerator();

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.header_text}>توضیحات :</Text>
            </View>
            <View style={styles.desc_container}>
                <Text style={styles.desc_text}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </Text>
            </View>
        </View>
    );
};

export default observer(Description);
