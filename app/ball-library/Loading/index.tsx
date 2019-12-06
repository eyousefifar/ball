import React, { ReactElement } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { observable,action } from 'mobx'
import { observer } from 'mobx-react';
import state from './state';
// styles

import styleGenerator from './styles';
// types
interface ILoading {
  loaded: boolean;
  dark: boolean;
  children: ReactElement;
  screenId: string;
  scrollView?: boolean;
}

class Loading extends React.Component<ILoading> {
  private darkLoading = require('./darkLoading.json');
  private lightLoading = require('./lightLoading.json');
  private isMounted = observable({value: false});
  private setMounted = action(()=> {
    this.isMounted.value = true;
  })
  render() {
    const { loaded, children, scrollView, screenId, dark } = this.props;
    const animationSource = dark ? this.darkLoading : this.lightLoading;

    const styles = styleGenerator(scrollView);
    const didScreenAppeared =
      screenId === 'Home' ? true : state.currentAppearedScreen === screenId;
    if ((loaded && didScreenAppeared) || this.isMounted.value  ) {
      this.setMounted();
      return children;
    } else {
      return (
        <View style={styles.container}>
          <LottieView
            style={styles.loading}
            source={animationSource}
            autoPlay
            speed={1.7}
            loop
          />
        </View>
      );
    }
  }
}

export default observer(Loading);
