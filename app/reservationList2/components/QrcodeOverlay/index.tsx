import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-native-paper';
import Share from 'react-native-share';
import QrCodeSvg from 'react-native-qrcode-svg';
import {observer} from 'mobx-react';
//local
import {defaultTheme, Touchable, Button, Colors} from '../../../ball-library';
import {dismissQrCode} from '../../library/nav';
// styles
import styleGenerator from './styles';


interface IQrCode {
	code:string,
	qrCodeId:string
}

class QrcodeOverlay extends React.Component<IQrCode> {

	private svgRef: any;

	private onDismissPress = async () => {
		await dismissQrCode();
	};
	private onSharePress = () => {
		this.svgRef && this.svgRef.toDataURL(this.svgShareCallBack);
	};

	private svgShareCallBack = (data: string) => {
		console.log(data);
		const url: string = `data:image/png;base64,${data}`;
		const options = {
			url,
			message: 'بلیط شما در بال',
			showAppsToView: true
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
		const {code,qrCodeId} = this.props;
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
									value={qrCodeId}
									backgroundColor={'white'}
									color={'#000'}
									size={164}
							/>
							<View style={styles.ticket_code_container}>
								<Text style={styles.ticket_code_header}>کد بلیط شما</Text>
								<Text style={styles.ticket_code_number}>{code}</Text>
							</View>
						</View>
					</View>
				</Provider>
		);
	}
}

export default observer(QrcodeOverlay);
