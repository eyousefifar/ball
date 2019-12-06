// import React from 'react';
// import { Animated } from 'react-native';
// import Icon from '../Icon';
// import RNLocation from 'react-native-location';
// import Touchable from '../Touchable';
// import { observer } from 'mobx-react';

// // style
// import UI from './UI';
// import { myLocationStyle as styleGenerator } from './styles';
// // types
// import { Location } from 'react-native-location/dist/types';
// interface IMyLocation {
//   animateToMyLocation: (lat: number, long: number) => void;
// }
// // store
// const MyLocation = (props: IMyLocation) => {
//   const { animateToMyLocation } = props;
//   const { styles, icon } = styleGenerator();

//   const checkPermission = async () => {
//     const result = await RNLocation.getCurrentPermission();
//     return (
//       result !== 'restricted' ||
//       result !== 'denied' ||
//       result !== 'notDetermined'
//     );
//   };
//   const onMyLocationPress = async () => {
//     const res = await checkPermission();
//     if (res) {
//       const latestLocation: Location | null = await RNLocation.getLatestLocation();
//       if (latestLocation !== null) {
//         animateToMyLocation(latestLocation.latitude, latestLocation.longitude);
//       }
//     }
//   };

//   return (
//     <Animated.View
//       style={[
//         styles.container,
//         { transform: [{ translateX: UI.myLocationTranslateX }] }
//       ]}
//     >
//       <Icon
//         type={'feather'}
//         name={'crosshair'}
//         color={icon.color}
//         size={icon.size}
//       />
//       <Touchable onPress={onMyLocationPress} rippleColor={'darkGrey'} />
//     </Animated.View>
//   );
// };

// export default observer(MyLocation);
