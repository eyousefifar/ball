import React from 'react';
import { View } from 'react-native';
import { showCancelReserve } from '../../library/nav';
import { Separator, Button } from '../../../ball-library';

import { expandedCardProps } from './types';

// local
import Address from './Address';

// styles
import { ExpandedStyle as styleGenerator } from './styles';
import { observer } from 'mobx-react-lite';

const ExpandedCard = (props: expandedCardProps) => {
  const { address, location, canBeCanceled } = props;
  const styles = styleGenerator();
  const onCancelPress = () => {
    showCancelReserve();
  };
  return (
    <>
      <Separator haveMargin={false} />
      <View style={styles.container}>
        <Address address={address} location={location} />
        <View style={styles.cancelContainer}>
          <Button
            onPress={onCancelPress}
            icon={{
              type: 'ball',
              name: 'delete'
            }}
            mode={'outlined'}
            color={'red'}
            rippleColor={'grey'}
            fullRadius
            size={'small'}
            disabled={canBeCanceled}
          >
            {'لغو رزرو'}
          </Button>
        </View>
      </View>
    </>
  );
};

export default observer(ExpandedCard);
