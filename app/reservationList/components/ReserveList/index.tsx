import React from 'react';
import { View, FlatList, Platform } from 'react-native';
import ReserveCard from '../ReserveCard';
import { showQrCode } from '../../library/nav';

// styles
import styleGenerator from './styles';
import { observer } from 'mobx-react-lite';
import { ScrollHeaderPadding } from '../../../ball-library';

const ReserveList = () => {
  const styles = styleGenerator();
  const rowRenderer = ({ item, index }) => {
    return <ReserveCard closest={index === 0} showQrCode={showQrCode} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={Platform.OS === 'android'}
        ListHeaderComponent={<ScrollHeaderPadding />}
        ListFooterComponent={<ScrollHeaderPadding />}
        style={{ flex: 1 }}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={rowRenderer}
        keyExtractor={(data, index) => `${data}`}
      />
    </View>
  );
};

export default observer(ReserveList);
