import React from 'react';
import {View, Text, Dimensions, ImageBackground, ListRenderItem} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
import {RectButton} from "react-native-gesture-handler";
// local
import {sportComplexStore} from '../../store/SportComplexStore'
import {ISportCarouselItem} from '../../store/types'
// styles
import styleGenerator from './styles';

const SportCarouselItem = () => {
	const renderItem : ListRenderItem<ISportCarouselItem>  = ({item}) => {
		const {image, footer_text} = item;
		return (
				<ImageBackground source={item.image} style={styles.image_background}
				                 imageStyle={{borderRadius: 6, overflow: 'hidden'}}>
					<View>
						<RectButton style={styles.box_carousel}>
							{/*<View style={styles.footer_text_container}>
								<Text style={styles.footer_text}>{item.footer_text}</Text>
							</View>*/}
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
						data={sportComplexStore.getCarouselItems}
						renderItem={renderItem}
						inverted={true}
						activeSlideAlignment={'start'}
						itemWidth={item_width}
						itemHeight={600}
						sliderWidth={width}
						sliderHeight={600}
						containerCustomStyle={{marginLeft: -16}}
				/>
			</View>
	);
};

export default observer(SportCarouselItem);
