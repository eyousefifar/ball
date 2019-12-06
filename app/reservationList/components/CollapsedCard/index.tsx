import React from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';

import CollapsedCardProps from './types';
// styles
import { collapsedCardStyle as styleGenerator } from './styles';

// local
import ProviderIcon from './ProviderIcon';
import AnimatedArrow from './AnimatedArrow';
import Info from './Info';
import QrCode from './QrCode';

const CollapsedCard = (props: CollapsedCardProps) => {
  const {
    showArrow,
    iconRotation,
    providerTitle,
    providerType,
    reserveDate,
    reserveTime,
    qrCodeValue,
    showQrCode
  } = props;
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <ProviderIcon />
        <Info />
      </View>
      <View style={styles.qrCodeContainer}>
        <QrCode showQrCode={showQrCode} qrCodeValue={qrCodeValue} />
        <AnimatedArrow iconRotation={iconRotation} showArrow={showArrow} />
      </View>
    </View>
  );
};

export default observer(CollapsedCard);
