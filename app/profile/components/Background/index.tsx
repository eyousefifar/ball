import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

// styles
import styleGenerator from './styles';
const Background = () => {
  const styles = styleGenerator();
  return (
    <View style={styles.container} pointerEvents={'none'}>
      <View style={styles.coloredSpace} />
      <View style={styles.whiteSpace} />
    </View>
  );
};

export default observer(Background);
