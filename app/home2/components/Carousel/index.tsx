import React from 'react';
import {View, Text, Dimensions, ListRenderItem, ImageBackground} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {homeStore} from '../../store'
import {ICarouselItem} from '../../store/types'



const CarouselItem = () => {

    const renderItem: ListRenderItem<ICarouselItem> = ({item}) => {
        return (
            <ImageBackground source={item.image} style={styles.image_background}>
                <View>
                    <RectButton style={styles.box_carousel}>
                        <View style={styles.footer_text_container}>
                            <Text style={styles.footer_text}>{item.footer_text}</Text>
                        </View>
                    </RectButton>
                </View>
            </ImageBackground>
        );
    };

    const styles = styleGenerator();

    const {width} = Dimensions.get('window');
    const item_width = width * 8.5 / 10;

    return (
        <View>
            <Carousel
                data={homeStore.getCarouselItems}
                renderItem={renderItem}
                inverted={true}
                activeSlideAlignment={'start'}
                itemWidth={item_width}
                itemHeight={400}
                sliderWidth={width}
                sliderHeight={600}
                containerCustomStyle={{marginLeft: -16}}
            />
        </View>
    );
};

export default observer(CarouselItem);
