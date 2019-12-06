// import React, { ReactElement } from 'react';
// import Marker from './Marker';
// import { observer } from 'mobx-react';

// // types
// import { IMarkers } from './types';

// const Markers = (props: IMarkers) => {
//   const { data } = props;

//   const renderMarkers = (): ReactElement[] => {
//     const markers: ReactElement[] = [];
//     const length = data.length;
//     for (let index = 0; index < length; index++) {
//       markers.push(<Marker key={data[index].providerId} {...data[index]} />);
//     }
//     return markers;
//   };
//   return <>{renderMarkers()}</>;
// };

// export default observer(Markers);
