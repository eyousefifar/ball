import React, {useRef} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-native-paper';
import Share from 'react-native-share';
import QrCodeSvg from 'react-native-qrcode-svg';
import {defaultTheme, Touchable, Button, Colors} from '../../ball-library';
import {dismissQrCode} from '../library/nav';
// styles
import {qrCodeStyle as styleGenerator} from './styles';
import {observer} from 'mobx-react';

// types
interface IQrCode {
  value: string;
}

class QrCode extends React.Component<IQrCode> {
  private svgRef: any;

  private onDismissPress = () => {
    dismissQrCode();
  };
  private onSharePress = () => {
    this.svgRef && this.svgRef.toDataURL(this.svgShareCallBack);
  };

  private svgShareCallBack = (data: string) => {
    console.log(data);
    const url: string = `data:image/png;base64,${data}`;
    const options = {
      url,

      message: 'بلیط ساعت هفت بعد از ظهر به کون مهرداد',
      showAppsToView: true,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  render() {
    const styles = styleGenerator();
    return (
      <Provider theme={defaultTheme}>
        <View style={styles.container}>
          <Touchable
            style={{zIndex: -1}}
            onPress={this.onDismissPress}
            rippleColor={'lightGrey'}
          />
          <View style={styles.logoutContainer}>
            <QrCodeSvg
              getRef={ref => (this.svgRef = ref)}
              value={'https://itsball.com'}
              backgroundColor={'white'}
              color={Colors.primaryPurple}
              size={164}
            />
            <Button
              mode={'contained'}
              style={styles.button}
              onPress={this.onSharePress}
              dark={false}
              size={'big'}
              fullRadius
              rippleColor={'darkGrey'}>
              {'اشتراک گذاری'}
            </Button>
          </View>
        </View>
      </Provider>
    );
  }
}

export default observer(QrCode);
