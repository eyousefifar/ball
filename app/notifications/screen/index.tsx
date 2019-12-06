import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {RecyclerListView, LayoutProvider, DataProvider} from 'recyclerlistview';
import {
  Header,
  Colors,
  defaultTheme,
  Loading,
  screens,
  ScrollHeaderPadding,
} from '../../ball-library';
import {observer} from 'mobx-react';
// local
import NotificationCard from '../components/NotificationCard';
import {EmptyCard} from '../../ball-library';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {dismissNotificationsScreen} from '../library/nav';
import {notificationStore} from '../store/NotificationStore';

class Notifications extends Component {
  private layout = new LayoutProvider(
    index => 0,
    (type, dim) => {
      dim.width = widthPercentageToDP('100%');
      dim.height = heightPercentageToDP('10%');
    },
  );
  private dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  private rowRenderer = (type, data, index) => {
    return (
      <NotificationCard
        date={'پنج روز پیش'}
        message={'پیامی از طرف بال'}
        notificationType={'Karting'}
      />
    );
  };

  render() {
    return (
      <Provider theme={defaultTheme}>
        <View style={{flex: 1, backgroundColor: Colors.primaryPurple}}>
          <Header
            title={'اعلان ها'}
            backgroundColor={'primary'}
            drawBehind
            mode={'fullWidth'}
            onPress={dismissNotificationsScreen}
          />
          <View style={{flex: 1}}>
            <ScrollHeaderPadding />
            {notificationStore.getNotifications.length != 0 && (
              <RecyclerListView
                layoutProvider={this.layout}
                dataProvider={this.dataProvider.cloneWithRows(
                  notificationStore.getNotifications,
                )}
                rowRenderer={this.rowRenderer}
                scrollViewProps={{
                  contentContainerStyle: {},
                  style: {flex: 1},
                }}
              />
            )}
            {notificationStore.getNotifications.length === 0 && (
              <EmptyCard
                mode={'thin'}
                text={'صندق اعلان ها خالی ست'}
                transparent={true}
              />
            )}
          </View>
        </View>
      </Provider>
    );
  }
}

export default observer(Notifications);
