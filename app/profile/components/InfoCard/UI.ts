import { UIManager, Platform, LayoutAnimation } from 'react-native';
import { observable, action, decorate } from 'mobx';
if (Platform.OS === 'android') {
  // tslint:disable-next-line: no-unused-expression
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
class UIClass {
  constructor(mode: 'edit' | 'normal') {
    this.editInformation = mode === 'edit';
  }
  public editInformation: boolean;

  public setEditInformationOn = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.editInformation = true;
  };
  public setEditInformationOff = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.editInformation = false;
  };
}
decorate(UIClass, {
  editInformation: observable,

  setEditInformationOn: action,
  setEditInformationOff: action
});

export default UIClass;
