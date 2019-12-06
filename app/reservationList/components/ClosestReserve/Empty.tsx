import React from 'react';
import { View } from 'react-native';
import { Surface, Paragraph } from 'react-native-paper';

// styles
import { emptyStyle as styleGenerator } from './styles';
const Empty = () => {
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <Surface style={styles.card}>
        <Paragraph>{'شما رزروی انجام نداده اید'}</Paragraph>
      </Surface>
    </View>
  );
};

export default Empty;
