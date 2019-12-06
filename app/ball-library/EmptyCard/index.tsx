import React from 'react';
import {Text,View} from 'react-native'
import { observer } from 'mobx-react';
// styles
import styleGenerator from './styles';


interface IEmptyCard {
  mode: 'thin' | 'thick';
  transparent: boolean;
  text: string;
}

const EmptyCard = (props: IEmptyCard) => {
  const { mode, text, transparent } = props;
  const styles = styleGenerator(mode, transparent);

  return (
    <View style={styles.container}>
      <Text style={styles.whiteText}>{text}</Text>
    </View>
  );
};

export default observer(EmptyCard);
