// import {observable, action, decorate} from 'mobx';
// import {Animated} from 'react-native';
// import {IMarker} from './types';

// class UIClass {
//   private baseAnimation: Animated.Value = new Animated.Value(0);
//   private isHiding: boolean = false;
//   private isHidden: boolean = true;
//   public providerCardValue: IMarker | null = null;
//   public providerInfoTranslateY: Animated.AnimatedInterpolation = this.baseAnimation.interpolate(
//     {
//       inputRange: [0, 1],
//       outputRange: [86 + 16 + 8, 0],
//     },
//   );
//   public myLocationTranslateX: Animated.AnimatedInterpolation = this.baseAnimation.interpolate(
//     {
//       inputRange: [0, 1],
//       outputRange: [0, 48],
//     },
//   );
//   public showProviderInfo = (value: IMarker) => {
//     this.providerCardValue = value;
//     Animated.timing(this.baseAnimation, {
//       toValue: 1,
//       duration: 360,
//       useNativeDriver: true,
//     }).start(() => {
//       this.isHidden = false;
//     });
//   };

//   public hideProviderInfo = () => {
//     if (!this.isHiding && !this.isHidden) {
//       this.isHiding = true;
//       Animated.timing(this.baseAnimation, {
//         toValue: 0,
//         duration: 360,
//         useNativeDriver: true,
//       }).start(() => {
//         this.isHiding = false;
//         this.isHidden = true;
//       });
//     }
//   };
// }
// decorate(UIClass, {
//   providerCardValue: observable,
//   showProviderInfo: action,
// });
// const UI = new UIClass();
// export default UI;
