import {
  Animated,
  LayoutAnimation,
  UIManager,
  Easing,
  LayoutAnimationConfig,
  Platform
} from 'react-native';
import { decorate, observable, action } from 'mobx';

if (Platform.OS === 'android') {
  // tslint:disable-next-line: no-unused-expression
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class UIClass {
  public expanded: boolean = false;

  public baseAnimation: Animated.Value = new Animated.Value(0);

  public rotateArrow: Animated.AnimatedInterpolation = this.baseAnimation.interpolate(
    {
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    }
  );
  private animationConfig: LayoutAnimationConfig = {
    duration: 120,
    create: {
      delay: 80,
      type: 'linear',
      property: 'opacity'
    },
    update: {
      type: 'linear',
      property: 'opacity'
    },
    delete: {
      type: 'linear',
      property: 'opacity'
    }
  };
  public expandCard = () => {
    this.expandRotatingArrow();
  };
  public closeCard = () => {
    this.closeRotatingArrow();
  };
  public setCardExpanded = () => {
    LayoutAnimation.configureNext(this.animationConfig);

    this.expanded = true;
  };
  public setCardClosed = () => {
    LayoutAnimation.configureNext(this.animationConfig);

    this.expanded = false;
  };
  private expandRotatingArrow = () => {
    Animated.timing(this.baseAnimation, {
      toValue: 1,
      duration: 120,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(this.setCardExpanded);
  };
  private closeRotatingArrow = () => {
    Animated.timing(this.baseAnimation, {
      toValue: 0,
      duration: 120,
      easing: Easing.linear,
      useNativeDriver: true
    }).start(this.setCardClosed);
  };
}
decorate(UIClass, {
  expanded: observable,
  expandCard: action,
  closeCard: action,
  setCardExpanded: action
});

export default UIClass;
