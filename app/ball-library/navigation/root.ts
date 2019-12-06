import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

// screens register functions
import {registerHomeScreens} from '../../home2';
import {registerSearchScreen} from '../../search3';
import {registerSearchGroupScreen} from '../../searchGroup';
import {registerDrawerScreen} from '../../drawer';
import {registerAuthScreen} from '../../authentication2';
import {registerReservationList} from '../../reservationList2';
import {registerNotificationsScreen} from '../../notifications';
import {registerAboutUsScreen} from '../../aboutUs';
import {registerProfileScreen} from '../../profile';
import {registerNoConnectionScreen} from '../../noConnection';
import {registerSportScreen} from '../../sport2';
import {registerRatingScreen} from '../../ratingPage';
import {registerSportComplexScreen} from '../../sportComplex2';
import {registerSportReservationScreen} from '../../sportReservation2';
import {registerSupportScreen} from '../../support2';
import {registerChatPageUsScreen} from '../../Chat';
import {registerAuthNeededScreen} from '../AuthNeeded/nav';
import {registerWalletScreen} from '../../wallet2';
import {registerFinalReserveScreen} from '../../finalReserve';

import {Colors} from '../theme';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {screens} from '../constants';
import {auth, userProfile} from '../index';

const registerScreens = () => {
  registerHomeScreens();
  registerSearchGroupScreen();
  registerAuthScreen();
  registerDrawerScreen();
  registerSearchScreen();
  registerReservationList();
  registerNotificationsScreen();
  registerAboutUsScreen();
  registerProfileScreen();
  registerNoConnectionScreen();
  registerSportScreen();
  registerRatingScreen();
  registerSportComplexScreen();
  registerSupportScreen();
  registerChatPageUsScreen();
  registerSportReservationScreen();
  registerAuthNeededScreen();
  registerWalletScreen();
  registerFinalReserveScreen();
};

const setRoot = async () => {
  await Navigation.setDefaultOptions({
    statusBar: {
      backgroundColor: Colors.primaryPurple,
      style: 'light',
    },

    topBar: {
      visible: false,
      height: 0,
    },
    modalPresentationStyle: OptionsModalPresentationStyle.overCurrentContext,

    layout: {
      direction: 'ltr',
      orientation: ['portrait'],
      backgroundColor: '#FFF',

      //fitSystemWindows: true,
    },
    overlay: {
      handleKeyboardEvents: true,
    },
    animations: {
      push: {
        waitForRender: true,
        enabled: true,

        content: {
          enabled: true,
          waitForRender: true,
          x: {
            from: 2 * widthPercentageToDP('100%'),
            to: 0,
            interpolation: 'decelerate',
            duration: 240,
          },
        },
      },
      showModal: {
        waitForRender: true,

        enabled: true,

        x: {
          from: 2 * widthPercentageToDP('100%'),
          to: 0,
          interpolation: 'decelerate',
          duration: 240,
        },
      },
      dismissModal: {
        enabled: true,

        waitForRender: false,
        x: {
         from: 0,
         to: 4 * widthPercentageToDP('100%'),
          duration: 420,
          interpolation: "accelerate",
        },
        
      },
      pop: {
        enabled: true,
        waitForRender: false,
        content: {
          enabled: true,
          waitForRender: false,

          x: {
            from: 0,
            to:4 * widthPercentageToDP('100%'),
            duration: 420,
            interpolation: "accelerate",

          },

         
        },
      },
    },
  });
  await Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: screens.drawer.id,
            name: screens.drawer.id,
            options: {
              sideMenu: {
                right: {
                  width: widthPercentageToDP('86%'),
                  height: heightPercentageToDP('100%'),
                },
              },
            },
          },
        },
        center: {
          stack: {
            options: {
              animations: {
                setRoot: {
                  enabled: false,
                },
              },
            },

            children: [
              {
                component: {
                  id: screens.home.id,
                  name: screens.home.id,
                },
              },
            ],
          },
        },
      },
    },
  });
};
export default async () => {
  await registerScreens();
  await Navigation.events().registerAppLaunchedListener(async () => {
    await setRoot();
  });
  await auth.authCheck();
};
