import React, { ReactElement } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { observable,action } from 'mobx'
import { observer } from 'mobx-react';
import state, {mountingState} from './state';
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
  private mounting = new mountingState();
  private timer = null;
  componentDidMount(){
    this.timer = setTimeout(()=> {
      this.mounting.setMounted();
    }, 60)
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    const { loaded, children, scrollView, screenId, dark } = this.props;
    const animationSource = dark ? this.darkLoading : this.lightLoading;

    const styles = styleGenerator(scrollView);
    const didScreenAppeared =
      screenId === 'Home' ? true : state.currentAppearedScreen === screenId;
    if ((loaded && didScreenAppeared) || this.mounting.mounted  ) {
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
