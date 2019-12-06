// import React from 'react';
// import { View } from 'react-native';
// import { Icon } from '../../ball-library';
// import { Marker as MapMarker } from 'react-native-maps';
// import { Caption } from 'react-native-paper';
// import { observer } from 'mobx-react-lite';
// // styles
// import UI from './UI';
// import { markerStyle as styleGenerator } from './styles';
// // types
// import { IMarker } from './types';
// const Marker = (props: IMarker) => {
//   const { location, providerName } = props;
//   const { styles, icon } = styleGenerator();
//   const onMarkerPress = () => {
//     UI.showProviderInfo(props);
//   };
//   return (
//     <MapMarker
//       coordinate={{
//         latitude: location.lat,
//         longitude: location.long
//       }}
//       onPress={onMarkerPress}
//     >
//       <View style={styles.container}>
//         <Icon
//           type={'simpleLine'}
//           name={'location-pin'}
//           size={icon.size}
//           color={icon.color}
//         />
//         <Caption style={styles.caption}>{providerName}</Caption>
//       </View>
//     </MapMarker>
//   );
// };

// export default observer(Marker);
