import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-native-paper';
import {
  defaultTheme,
  Header,
  Colors,
  Loading,
  screens
} from '../../ball-library';
import { dismissReservationListScreen } from '../library/nav';

import { observer } from 'mobx-react';

// local
import ReserveList from '../components/ReserveList';

// styles

// theme
// store
import { reservesStore } from '../store';

class ReservationList extends React.Component {
  public render() {
    return (
      <Provider theme={defaultTheme}>
        <View style={{ flex: 1, backgroundColor: Colors.primaryPurple }}>
          <Header
            title={'رزرو ها'}
            drawBehind
            mode={'fullWidth'}
            onPress={dismissReservationListScreen}
          />
          <Loading
            dark={false}
            loaded={true}
            screenId={screens.reservationList.id}
          >
            <ReserveList />
          </Loading>
        </View>
      </Provider>
    );
  }
}

export default observer(ReservationList);
