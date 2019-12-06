import React from 'react';
import {observer} from 'mobx-react';

import {BottomNavigation} from '../../ball-library';

// internal screens
import Sport from './Sport';
import {SportReservation} from '../../sportReservation2';

interface ISportTabs {
  sportId: string;
  initialScreenIndex: number;
}

class SportTabs extends React.Component<ISportTabs> {
  public render() {
    const {sportId, initialScreenIndex} = this.props;
    return (
      <BottomNavigation
        renderProps={[
          {
            tabTitle: 'خانه',
            tabIcon: {
              type: 'antDesign',
              name: 'home',
            },
            screen: <Sport sportId={sportId} />,
          },
          {
            tabTitle: 'رزرو',
            tabIcon: {
              type: 'ball',
              name: 'calendar',
            },
            screen: <SportReservation sportId={sportId} />,
          },
        ]}
        initialScreenIndex={initialScreenIndex}
      />
    );
  }
}
export default observer(SportTabs);
