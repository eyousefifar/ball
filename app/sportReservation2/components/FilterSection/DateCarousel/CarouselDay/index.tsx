import React, {useState, useEffect, createRef} from 'react';
import {View, Text, Dimensions, ListRenderItem, ImageBackground} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
import moment from "moment-jalaali";
// styles
import styleGenerator from './styles';
// local
import {sportReservationStore} from "../../../../store/SportReservationStore";

interface IDayCarousel {
    id: number,
    day: number,
}

const CarouselDay = () => {
    const styles = styleGenerator();
    const day_carousel = createRef<any>();
    // states
    const [days, setDays] = useState<Array<IDayCarousel>>([
        {
            id: 1,
            day: 1
        },
        {
            id: 2,
            day: 2
        },
        {
            id: 3,
            day: 3
        },
        {
            id: 4,
            day: 4
        },
        {
            id: 5,
            day: 5
        },
        {
            id: 6,
            day: 6
        },
        {
            id: 7,
            day: 7
        },
        {
            id: 8,
            day: 8
        },
        {
            id: 9,
            day: 9
        },
        {
            id: 10,
            day: 10
        },
        {
            id: 11,
            day: 11
        },
        {
            id: 12,
            day: 12
        },
        {
            id: 13,
            day: 13
        },
        {
            id: 14,
            day: 14
        },
        {
            id: 15,
            day: 15
        },
        {
            id: 16,
            day: 16
        },
        {
            id: 17,
            day: 17
        },
        {
            id: 18,
            day: 18
        },
        {
            id: 19,
            day: 19
        },
        {
            id: 20,
            day: 20
        },
        {
            id: 21,
            day: 21
        },
        {
            id: 22,
            day: 22
        },
        {
            id: 23,
            day: 23
        },
        {
            id: 24,
            day: 24
        },
        {
            id: 25,
            day: 25
        },
        {
            id: 26,
            day: 26
        },
        {
            id: 27,
            day: 27
        },
        {
            id: 28,
            day: 28
        },
        {
            id: 29,
            day: 29
        },
        {
            id: 30,
            day: 30
        },
        {
            id: 31,
            day: 31
        },
    ]);


    useEffect(() => {
        let timer = setTimeout(() => {
            day_carousel.current.snapToItem(sportReservationStore.dayIndex, true)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }

    }, []);

    const handleChangeDay = async (slideIndex: number) => {
        // console.warn('IndexDay : ', slideIndex);
        await sportReservationStore.setDayIndex(slideIndex);
        await sportReservationStore.getAllReserveList();
    };


    const renderItem: ListRenderItem<IDayCarousel> = ({item}) => {
        return (
            <View style={styles.month_carousel_container}>
                <Text style={styles.month_carousel_text}>{item.day}</Text>
            </View>
        );
    };

    const {width} = Dimensions.get('window');
    const slider_width = width - 32;

    return (
        <View style={{alignItems: 'center', marginTop: 4}}>
            <Carousel
                ref={day_carousel}
                data={days}
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
                onBeforeSnapToItem={handleChangeDay}
            />
        </View>
    );
};

export default observer(CarouselDay);
