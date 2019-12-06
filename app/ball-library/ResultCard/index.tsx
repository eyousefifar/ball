import React from 'react';
import { View, Image } from 'react-native';
import Button from '../Button';
import { screens } from '../constants';
import { Paragraph, Caption } from 'react-native-paper';
import { showLocation } from 'react-native-map-link';
import { observer } from 'mobx-react';
// styles
import styleGenerator from './styles';

// types
import { IResultCard } from './types';
import showModal from '../navigation/showModal';
class ResultCard extends React.Component<IResultCard> {
  private onButtonPress = async () => {
    const { mode, type, providerId } = this.props;
    if (mode === 'reserve') {
      const screen = type === 'sport' ? screens.sport : screens.sportComplex;
      await showModal({
        ...screen,
        passProps: {
          sportId: providerId
        }
      });
    } else if (mode === 'navigation') {
      this.onNavigationPress();
    }
  };

  private onNavigationPress = async () => {
    const { location, providerName } = this.props;
    await showLocation({
      latitude: location.lat,
      longitude: location.long,
      title: providerName,
      googleForceLatLon: false,
      alwaysIncludeGoogle: true,
      dialogTitle: 'مسیر یابی',
      dialogMessage: 'نرم افزار مورد نظر خود را انتخاب کنید',
      cancelText: 'لغو'
    });
  };

  render() {
    const {
      mode,
      providerAddress,

      providerLogoUri,
      providerName,
      style
    } = this.props;
    const { styles, borderRadius } = styleGenerator();
    return (
      <View style={[styles.container, style]}>
        <View style={styles.infoContainer}>
          <Image
            source={{
              uri: providerLogoUri
            }}
            style={styles.image}
            borderRadius={borderRadius}
          />
          <View style={styles.providerTitleContainer}>
            <Paragraph style={styles.title}>{providerName}</Paragraph>
            <Caption numberOfLines={1} style={styles.address}>
              {providerAddress}
            </Caption>
          </View>
        </View>
        <Button
          onPress={this.onButtonPress}
          mode={'contained'}
          size={'small'}
          fullRadius
          rippleColor={'lightGrey'}
        >
          {mode === 'reserve' ? 'رزرو' : 'مسیریابی'}
        </Button>
      </View>
    );
  }
}

export default observer(ResultCard);
