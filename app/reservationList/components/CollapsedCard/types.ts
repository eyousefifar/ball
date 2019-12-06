import { Animated } from 'react-native';
export default interface CollapsedCardProps {
  iconRotation: Animated.AnimatedInterpolation;
  providerType: 'sportHall'; // TODO: enum of All types;
  providerTitle: string;
  reserveTime: string;
  reserveDate: string;
  qrCodeValue: string;
  showArrow: boolean;
  showQrCode: (value: string) => void;
}

export interface AnimatedArrowProps {
  iconRotation: Animated.AnimatedInterpolation;
  showArrow: boolean;
}
