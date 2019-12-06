import { I18nManager } from 'react-native';

I18nManager.allowRTL(false);
I18nManager.forceRTL(false)
import { runApp, auth } from './app/ball-library';
runApp();
auth.authCheck();
