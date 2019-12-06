import React from 'react';
import {View, Slider} from 'react-native';
// import Slider from '@react-native-community/slider';
import {observer} from 'mobx-react';
import {Paragraph, Caption} from 'react-native-paper';

// styles
import {rateSliderStyle as styleGenerator} from './styles';
const RateSlider = () => {
  const {styles, sliderColor} = styleGenerator();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Paragraph numberOfLines={1}>{'تمیزی'}</Paragraph>
      </View>
      <View style={styles.slideContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={5}
          step={1}
          minimumTrackTintColor={sliderColor.purple}
          maximumTrackTintColor={sliderColor.grey}
          thumbTintColor={sliderColor.purple}
        />
        <View style={styles.sliderNumber}>
          <Caption style={styles.number}>{'۰'}</Caption>
          <Caption style={styles.number}>{'۱'}</Caption>
          <Caption style={styles.number}>{'۲'}</Caption>
          <Caption style={styles.number}>{'۳'}</Caption>
          <Caption style={styles.number}>{'۴'}</Caption>
          <Caption style={styles.number}>{'۵'}</Caption>
        </View>
      </View>
    </View>
  );
};

export default observer(RateSlider);
