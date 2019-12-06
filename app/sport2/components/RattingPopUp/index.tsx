import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider, Headline } from 'react-native-paper';
import {
  auth,
  defaultTheme,
  Touchable,
  dismissOverlay,
  Button
} from '../../../ball-library';

// styles
import styleGenerator from './styles';

const Logout = () => {
  const styles = styleGenerator();
  const onDismissPress = async () => {
    await dismissOverlay('Logout');
  };
  const onLogoutPress = async () => {
    await auth.logout();
    await onDismissPress();
  };

  return (
    <Provider theme={defaultTheme}>
      <Touchable
        style={{ zIndex: -1, backgroundColor: 'rgba(0,0,0,0.25)' }}
        onPress={onDismissPress}
        rippleColor={'lightGrey'}
      />
      <View style={styles.container}>
        <View style={styles.logoutContainer}>
          <Headline style={styles.title}>
            {'مایل به خروج از حساب کاربری خود هستید؟'}
          </Headline>
          <Button
            mode={'contained'}
            style={styles.button}
            rippleColor={'darkGrey'}
            size={'big'}
            onPress={onLogoutPress}
            dark={false}
          >
            {'بله، خارج می شوم'}
          </Button>
          <Button
            mode={'contained'}
            style={styles.button}
            rippleColor={'darkGrey'}
            size={'big'}
            onPress={onDismissPress}
            dark={false}
          >
            {'خیر، ادامه میدهم'}
          </Button>
        </View>
      </View>
    </Provider>
  );
};

export default Logout;
