import React, {ReactElement} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
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
  constructor(props: ILoading){
    super(props);
    const {screenId} = props;
    this.state = {
      didScreenAppeared: screenId === 'Home'? true : false,
      loaded: false
    }
  }
  private darkLoading = require('./darkLoading.json');
  private lightLoading = require('./lightLoading.json'); 
  componentDidUpdate(prevProps, prevState){
    const {screenId } = this.props;
    if(state.currentAppearedScreen === screenId && !prevState.didScreenAppeared ){
      this.setState({didScreenAppeared: true }); 
    }
    if (prevProps.loaded !== this.props.loaded){
      this.setState({loaded: this.props.loaded});
    }
  }
  render() {
    const {children, scrollView, dark} = this.props;
    const animationSource = dark ? this.darkLoading : this.lightLoading;

    const styles = styleGenerator(scrollView);

    if ((this.state.loaded && this.state.didScreenAppeared)) {
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
