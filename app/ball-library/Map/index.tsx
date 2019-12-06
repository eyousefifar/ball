import React from 'react';
//import { View, StyleSheet } from 'react-native';
// import RNLocation from 'react-native-location';
// import NativeMap, { PROVIDER_GOOGLE, Camera } from 'react-native-maps';
// import { observer } from 'mobx-react';

// local
// import MyLocation from './MyLocation';
// import Markers from './Markers';
// import ProviderInfo from './ProviderInfo';
// styles
// import UI from './UI';
// import { IMap } from './types';
// import Header from '../Header';

class Map extends React.Component {
  // private mapRef = React.createRef();
  // private camera: Camera = {
  //   center: {
  //     latitude: 34.633836,
  //     longitude: 50.868418
  //   },
  //   altitude: 0,
  //   heading: 0,
  //   pitch: 0,
  //   zoom: 14
  // };
  // private requestPermission = async () => {
  //   const result = await RNLocation.requestPermission({
  //     android: {
  //       detail: 'fine'
  //     },
  //     ios: 'always'
  //   });
  //   return result;
  // };

  // private animateToMyLocation = (lat: number, long: number) => {
  //   if (this.mapRef) {
  //     this.mapRef.current.animateCamera({
  //       center: {
  //         latitude: lat,
  //         longitude: long
  //       },
  //       duration: 360,
  //       zoom: 14
  //     });
  //   }
  // };

  // async componentDidMount() {
  //   await this.requestPermission();
  // }
  // componentWillUnmount() {}
  render() {
    //  const { mode, markers } = this.props;
    return (
      // <View style={StyleSheet.absoluteFill}>
      //   {mode === 'navigation' && (
      //     <Header
      //       mode={'fullWidth'}
      //       title={'مکان مجموعه'}
      //       drawBehind={false}
      //       backgroundColor={'transparent'}
      //       onPress={() => {}}
      //     />
      //   )}
      //   <NativeMap
      //     ref={this.mapRef}
      //     provider={PROVIDER_GOOGLE}
      //     initialCamera={this.camera}
      //     loadingEnabled
      //     showsUserLocation
      //     toolbarEnabled={false}
      //     moveOnMarkerPress
      //     style={{ flex: 1 }}
      //     onPress={UI.hideProviderInfo}
      //   >
      //     <Markers data={markers} />
      //   </NativeMap>
      //   <ProviderInfo mode={mode} data={UI.providerCardValue} />
      //   <MyLocation animateToMyLocation={this.animateToMyLocation} />
      // </View>
      null
    );
  }
}

export default Map;
