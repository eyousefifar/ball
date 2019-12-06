import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { Title, Headline, Caption } from 'react-native-paper';
// styles
import styles from './styles';

const Timer = () => {
  const Colon = style => <Title style={[style, styles.colon]}>{':'}</Title>;
  const TimeName = (name: string) => (
    <Caption style={styles.timeName}>{name}</Caption>
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.timeContainer}>
          <Headline style={styles.blue}>{'08'}</Headline>
        </View>
        {Colon(styles.deepPurple)}
        <View style={styles.timeContainer}>
          <Headline style={styles.deepPurple}>{'08'}</Headline>
        </View>
        {Colon(styles.purple)}
        <View style={styles.timeContainer}>
          <Headline style={styles.purple}>{'08'}</Headline>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.timeContainer}>{TimeName('روز')}</View>
        <View style={styles.timeContainer}>{TimeName('ساعت')}</View>

        <View style={styles.timeContainer}>{TimeName('دقیقه')}</View>
      </View>
    </>
  );
};

export default observer(Timer);
