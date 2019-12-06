import React from 'react';
import { View } from 'react-native';
import { Title, Caption } from 'react-native-paper';
import { observer } from 'mobx-react';
// styles
import { infoStyle as styleGenerator } from './styles';

const Info = () => {
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <Title style={[styles.alignRight, styles.titleFont14]}>
        {'استخر قصر آبی'}
      </Title>
      <Caption style={styles.alignRight}>{'۱۴:۱۳' + ',' + '۱۳۹۸/۳/۱۲'}</Caption>
    </View>
  );
};

export default observer(Info);
