import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider, Headline } from 'react-native-paper';

import { defaultTheme, Touchable, Button } from '../../ball-library';
import { dismissCancelReserve } from '../library/nav';
// styles
import { qrCodeStyle as styleGenerator } from './styles';

// types
interface cancelReserveProps {
  value: string;
}

const CancelReserve = (props: cancelReserveProps) => {
  const styles = styleGenerator();

  const onLogoutPress = async () => {
    // await auth.logout();
    // onDismissPress();
  };

  return (
    <Provider theme={defaultTheme}>
      <View style={styles.container}>
        <Touchable
          style={{ zIndex: -1 }}
          onPress={dismissCancelReserve}
          rippleColor={'lightGrey'}
        />
        <View style={styles.logoutContainer}>
          <Headline style={styles.title}>
            {'آیا مایل به لغو رزرو خود هستید؟‌'}
          </Headline>
          <Button
            mode={'contained'}
            style={styles.button}
            onPress={() => {}}
            dark={false}
            size={'big'}
            fullRadius
            rippleColor={'darkGrey'}
          >
            {'بله، رزرو را لغو کن '}
          </Button>
          <Button
            mode={'contained'}
            style={styles.button}
            onPress={() => {}}
            dark={false}
            size={'big'}
            fullRadius
            rippleColor={'darkGrey'}
          >
            {'خیر، نمیخواهم لغو کنم'}
          </Button>
        </View>
      </View>
    </Provider>
  );
};

export default CancelReserve;
