import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';

// local
import CollapsedCard from '../CollapsedCard';
import ExtendedCard from '../ExtendedCard';
import Timer from '../Timer';
import Empty from './Empty';

// styles
import styleGenerator from './styles';

// tslint:disable-next-line: variable-name
const ClosestReserve = props => {
  const { showQrCode } = props;
  const noReserve = false;
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title style={styles.title}>{'تا نزدیک ترین بال'}</Title>
        <Timer />
      </View>
      {noReserve ? (
        <Empty />
      ) : (
        <>
          <CollapsedCard showArrow={false} showQrCode={showQrCode} />
          <ExtendedCard />
        </>
      )}
    </View>
  );
};

export default ClosestReserve;
