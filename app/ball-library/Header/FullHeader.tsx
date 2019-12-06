import React from 'react';

import { View, InteractionManager } from 'react-native';
import { Appbar, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Touchable from '../Touchable';

// styles
import { fullHeaderStyle as styleGenerator } from './styles';
import UIClass from './UI';
// types
import { fullHeaderProps } from './types';

class FullHeader extends React.Component<fullHeaderProps> {
  private UI = new UIClass(); // UI class for running animation

  public componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.UI.animateHeader();
    });
  }

  private onBackPress = () => {
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    }
  };
  public render() {
    const { drawBehind, title, backgroundColor } = this.props;
    const { styles, iconSize } = styleGenerator(backgroundColor);

    return (
      <>
        <Appbar.Header style={styles.container} pointerEvents={'box-none'}>
          <View style={styles.animatedHeaderContainer}>
            <View style={styles.iconContainer}>
              <Icon name={'arrow-right'} color={'black'} size={iconSize} />
            </View>

            <View style={styles.titleContainer}>
              <Paragraph numberOfLines={1}>{title}</Paragraph>
            </View>
            <Touchable onPress={this.onBackPress} rippleColor={'darkGrey'} />
          </View>
        </Appbar.Header>
        {!drawBehind && (
          <View style={styles.topPadding} pointerEvents={'box-only'} />
        )}
      </>
    );
  }
}

export default FullHeader;
