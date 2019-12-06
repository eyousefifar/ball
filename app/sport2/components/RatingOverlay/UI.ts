import { Animated, Easing } from 'react-native';

export default class UIClass {
  public increaseCashModalOpacity: Animated.Value = new Animated.Value(0);

  public increaseCashModalOpen = (): void => {
    Animated.timing(this.increaseCashModalOpacity, {
      toValue: 1,
      duration: 280,
      easing: Easing.ease,
      useNativeDriver: true
    }).start();
  };
  public increaseCashModalClose = (animationDone: Function): void => {
    Animated.timing(this.increaseCashModalOpacity, {
      toValue: 0,
      duration: 280,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(() => {
      animationDone('done');
    }); // TODO: make it use async await style
  };
}
