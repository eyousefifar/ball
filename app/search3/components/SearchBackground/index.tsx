import React from 'react';
import { View } from 'react-native';

import { observer } from 'mobx-react';
// local
import { Map } from '../../../ball-library';
// styles
import styleGenerator from './styles';

// types

const SearchBackground = (props) => {
  const { isSearch, isMapSearch } = props;
  const styles = styleGenerator();

  return (
    <View style={styles.container}>
      {isSearch && <View style={styles.coloredBackground} />}
      {isMapSearch && (
        <Map
          mode={'reserve'}
          markers={[
            {
              providerName: 'تست',
              providerId: 'unique',
              location: {
                lat: 34.1231,
                long: 50.6565
              },
              providerAddress: 'تست ستیشستی ت ',
              providerLogoUri:
                'https://cdn01.zoomit.ir/2019/7/dc792e4b-e4f8-4906-ba92-0d170f239ba7.jpg'
            },
            {
              providerName: 'تست',
              providerId: 'unique2',
              location: {
                lat: 34.1231,
                long: 50.6565
              },
              providerAddress: 'تست ستیشستی ت ',
              providerLogoUri:
                'https://cdn01.zoomit.ir/2019/7/dc792e4b-e4f8-4906-ba92-0d170f239ba7.jpg'
            },
            {
              providerName: 'تست',
              providerId: 'unique4',
              location: {
                lat: 34.1231,
                long: 50.6565
              },
              providerAddress: 'تست ستیشستی ت ',
              providerLogoUri:
                'https://cdn01.zoomit.ir/2019/7/dc792e4b-e4f8-4906-ba92-0d170f239ba7.jpg'
            }
          ]}
        />
      )}
    </View>
  );
};

export default observer(SearchBackground);
