import React, {createRef, useEffect, useState} from 'react';
import {View, Text, Dimensions, ListRenderItem, ImageBackground} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
// styles
import styleGenerator from './styles';
// local
import {walletStore} from '../../../../store/WalletStore'


interface IMonthCarousel {
    id: number,
    month: string
}

const CarouselMonth = () => {

    const styles = styleGenerator();

    // ref
    const month_carousel: any = createRef<any>();
    // states
    const [months, setMonths] = useState<Array<IMonthCarousel>>([
        {
            id: 1,
            month: 'فروردین'
        },
        {
            id: 2,
            month: 'اردیبهشت'
        },
        {
            id: 3,
            month: 'خرداد'
        },
        {
            id: 4,
            month: 'تیر'
        },
        {
            id: 5,
            month: 'مرداد'
        },
        {
            id: 6,
            month: 'شهریور'
        },
        {
            id: 7,
            month: 'مهر'
        },
        {
            id: 8,
            month: 'آبان'
        },
        {
            id: 9,
            month: 'آذر'
        },
        {
            id: 10,
            month: 'دی'
        },
        {
            id: 11,
            month: 'بهمن'
        },
        {
            id: 12,
            month: 'اسفند'
        },
    ]);

    useEffect(() => {
        let timer = setTimeout(() => {
            month_carousel.current.snapToItem(walletStore.monthIndex);
        }, 1000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    const handleChangeMonth = async (slideIndex: number) => {
        console.warn('IndexMonth : ', slideIndex);
        await walletStore.setMonthIndex(slideIndex);
        await walletStore.getAllTransactions();
    };


    const renderItem: ListRenderItem<IMonthCarousel> = ({item}) => {
        return (
            <View style={styles.month_carousel_container}>
                <Text style={styles.month_carousel_text}>{item.month}</Text>
            </View>
        );
    };


    const {width} = Dimensions.get('window');
    const slider_width = width - 32;


    return (
        <View style={{alignItems: 'center', marginTop: 4}}>
            <Carousel
                ref={month_carousel}
                data={months}
                renderItem={renderItem}
                inverted={true}
                enableMomentum={true}
                activeSlideAlignment={'center'}
                inactiveSlideOpacity={0.4}
                inactiveSlideScale={0.8}
                itemWidth={80}
                itemHeight={35}
                sliderWidth={slider_width}
                sliderHeight={35}
                containerCustomStyle={styles.slider_container}
				onBeforeSnapToItem={handleChangeMonth}
			/>
        </View>
    );
};

export default observer(CarouselMonth);
