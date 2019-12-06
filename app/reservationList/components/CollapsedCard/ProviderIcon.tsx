import React from 'react';
import { View } from 'react-native';
import { SportIcon } from '../../../ball-library';
import { observer } from 'mobx-react-lite';

import { providerIconStyle as styleGenerator } from './styles';
const ProviderIcon = () => {
  const { styles, icon } = styleGenerator();
  return (
    <View style={styles.container}>
      <SportIcon
        sportType={'sport-complex'}
        size={icon.size}
        color={icon.color}
      />
    </View>
  );
};

export default observer(ProviderIcon);
