import React from 'react';
import { View } from 'react-native';
import { Icon } from '../../../ball-library';
import { RectButton } from 'react-native-gesture-handler';
import { phonecall, web } from 'react-native-communications';
// styles
import styleGenerator from './styles';

const Communications = () => {
  const { styles, rippleColor, icon } = styleGenerator();
  const onPhoneCallPress = () => {
    phonecall('02537400046', true);
  };
  const onWebsitePress = () => {
    web('https://itsball.com');
  };
  const onInstagramPress = () => {
    web('https://instagram.com/itsball');
  };
  return (
    <View style={styles.container}>
      <RectButton
        onPress={onPhoneCallPress}
        style={styles.iconsContainer}
        rippleColor={rippleColor}
      >
        <Icon type={'ball'} name={'call'} color={icon.color} size={icon.size} />
      </RectButton>
      <RectButton
        onPress={onWebsitePress}
        style={styles.iconsContainer}
        rippleColor={rippleColor}
      >
        <Icon
          type={'antDesign'}
          name={'earth'}
          color={icon.color}
          size={icon.size}
        />
      </RectButton>
      <RectButton
        onPress={onInstagramPress}
        style={styles.iconsContainer}
        rippleColor={rippleColor}
      >
        <Icon
          type={'simpleLine'}
          name={'social-instagram'}
          color={icon.color}
          size={icon.size}
        />
      </RectButton>
    </View>
  );
};

export default Communications;
