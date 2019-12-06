// import React from 'react';
// import { Animated } from 'react-native';
// import ResultCard from '../ResultCard';
// const AnimatedResultCard = Animated.createAnimatedComponent(ResultCard);
// import { observer } from 'mobx-react';

// // styles
// import UI from './UI';
// // types
// import { IProviderInfo } from './types';
// const ProviderInfo = (props: IProviderInfo) => {
//   const { mode, data } = props;
//   if (data !== null) {
//     return (
//       <AnimatedResultCard
//         style={{
//           transform: [{ translateY: UI.providerInfoTranslateY }],
//           position: 'absolute',
//           bottom: 16
//         }}
//         mode={mode}
//         type={'sport'}
//         {...data}
//       />
//     );
//   } else {
//     return null;
//   }
// };

// export default observer(ProviderInfo);
