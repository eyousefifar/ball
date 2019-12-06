import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

// assets
import SvgQrCode from '../../assets/QrCode';

// styles
import { qrCodeStyle as styleGenerator } from './styles';
import { observer } from 'mobx-react-lite';

// types
interface qrCodeProps {
  showQrCode: (value: string) => void;
  qrCodeValue: string;
}

const QrCode = (props: qrCodeProps) => {
  const { qrCodeValue, showQrCode } = props;
  const { size, color, rippleColor } = styleGenerator();
  const onPress = () => {
    showQrCode(`${qrCodeValue} + DADASDASDsd`);
  };
  return (
    <BorderlessButton onPress={onPress} rippleColor={rippleColor}>
      <SvgQrCode width={size} height={size} fill={color} />
    </BorderlessButton>
  );
};

export default observer(QrCode);
