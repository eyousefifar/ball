import React from 'react';
import { View } from 'react-native';
import { Icon, mapLink } from '../../../ball-library';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Caption } from 'react-native-paper';

// styles
import { addressStyle as styleGenerator } from './styles';

// types
import { addressProps } from './types';
import { observer } from 'mobx-react-lite';
const Address = (props: addressProps) => {
  const { address, location } = props;
  const { styles, icon, rippleColor } = styleGenerator();
  const onLocationPress = async () => {
    const { lat, long } = location;
    await mapLink({
      lat,
      long
    });
  };
  return (
    <View style={styles.addressContainer}>
      <BorderlessButton onPress={onLocationPress} rippleColor={rippleColor}>
        <Icon
          type={'ball'}
          name={'location'}
          color={icon.color}
          size={icon.size}
        />
      </BorderlessButton>
      <Caption
        style={styles.addressText}
        numberOfLines={2}
        ellipsizeMode={'tail'}
      >
        {'قم، پردیسان، خیابان الوند، کوچه ۳، انتهای کوچه'}
      </Caption>
    </View>
  );
};

export default observer(Address);
