import React from 'react';
import { View, Image } from 'react-native';
import { Touchable } from '../../../ball-library';
import { Caption } from 'react-native-paper';
import { observer } from 'mobx-react';
import { pushSport } from '../../library/nav';
// styles
import { categoryCardStyle as styleGenerator } from './styles';

const CategoryCard = props => {
  const swim = require('../../assets/swimimg.jpg');
  const basketball = require('../../assets/basketball.jpg');
  const futsal = require('../../assets/sporthall.jpg');

  const { styles, borderRadius } = styleGenerator();

  return (
    <View style={styles.container}>
      <Caption style={styles.caption}>{'مجموعه های آبی'}</Caption>
      <Image
        source={[swim, basketball, futsal][props.index]}
        style={styles.image}
        borderRadius={borderRadius}
      />
      <Touchable rippleColor={'lightGrey'} onPress={pushSport} />
    </View>
  );
};

export default observer(CategoryCard);
