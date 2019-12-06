import React from 'react';
import { View } from 'react-native';
import { Surface, Paragraph, Caption } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
// styles
import styleGenerator from './styles';
import { SportIcon } from '../../../ball-library';

// types
import { INotificationCard } from './types';

const NotificationCard = (props: INotificationCard) => {
  const { date, message, notificationType } = props;
  const { styles, icon } = styleGenerator();
  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        <SportIcon
          sportType={'sport-complex'}
          size={icon.size}
          color={icon.color}
        />
      </View>
      <View style={styles.messageContainer}>
        <Paragraph numberOfLines={1}>{message}</Paragraph>
      </View>
      <View style={styles.timeContainer}>
        <Caption numberOfLines={1}>{date}</Caption>
      </View>
    </Surface>
  );
};

export default observer(NotificationCard);
