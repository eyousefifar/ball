import React from 'react';
import { View, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // TODO: Animated Ball Icon
import { observer } from 'mobx-react';
import { BorderlessButton } from 'react-native-gesture-handler';
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

// styles
import { animatedArrowStyle as styleGenerator } from './styles';
// types
import { AnimatedArrowProps } from './types';

const AnimatedArrow = (props: AnimatedArrowProps) => {
  const { styles, iconTransform, iconSize } = styleGenerator(
    props.iconRotation
  );
  return (
    <View style={styles.container}>
      {props.showArrow ? (
        <AnimatedIcon
          style={iconTransform}
          name={'ios-arrow-up'}
          color={'grey'}
          size={iconSize}
        />
      ) : (
        <View style={{ width: 16, height: 24 }} />
      )}
    </View>
  );
};

export default observer(AnimatedArrow);
