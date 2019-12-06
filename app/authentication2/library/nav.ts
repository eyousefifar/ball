import { Navigation } from 'react-native-navigation';
import Authentication from '../screen';
import RegisterPage from './../components/Register'
import ConfirmPage from '../components/ConfirmPage'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {screens, dismissModal, showModal} from '../../ball-library';

export const registerAuthScreen = () => {
  Navigation.registerComponent(screens.authentication.id, () =>
    gestureHandlerRootHOC(Authentication)
  );

  Navigation.registerComponent(screens.register.id, () =>
      gestureHandlerRootHOC(RegisterPage)
  );

  Navigation.registerComponent(screens.confirm.id, () =>
      gestureHandlerRootHOC(ConfirmPage)
  );
};


export const showRegisterScreen = async (confirmKey:string,phone:string) => {
  await showModal({
    ...screens.register,
    passProps :{
      confirmKey : confirmKey,
      phone:phone
    }
  });
};
export const showConfirmScreen = async (isLogin:boolean,phone:string) => {
  await showModal({
    ...screens.confirm,
    passProps:{
      isLogin : isLogin,
      phone:phone
    }
  });
};

export const dismissAuthScreen = async () => {
  await dismissModal(screens.authentication.id);
};
export const dismissLoginScreen = async () => {
  await dismissModal(screens.login.id);
};
export const dismissRegisterScreen = async () => {
  await dismissModal(screens.register.id);
};
export const dismissConfirmScreen = async () => {
  await dismissModal(screens.confirm.id);
};
