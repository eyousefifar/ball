import React from 'react';
import { Provider } from 'react-native-paper';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { Touchable, defaultTheme, Button } from '../../../ball-library';
import { dismissRatingOverlay } from '../../library/nav';

// local
import RateSlider from './RateSlider';
// styles
import styleGenerator from './styles';

class RatingOverlay extends React.Component {
  render() {
    const styles = styleGenerator();
    return (
      <Provider theme={defaultTheme}>
        <View style={styles.container}>
          <Touchable
            style={{ zIndex: -1 }}
            onPress={dismissRatingOverlay}
            rippleColor={'lightGrey'}
          />
          <View style={styles.cardContainer}>
            <RateSlider />
            <RateSlider />
            <RateSlider />
            <RateSlider />
            <Button
              mode={'contained'}
              size={'medium'}
              rippleColor={'lightGrey'}
              fullRadius
              onPress={() => {}}
            >
              {'ثبت'}
            </Button>
          </View>
        </View>
      </Provider>
    );
  }
}

export default observer(RatingOverlay);
