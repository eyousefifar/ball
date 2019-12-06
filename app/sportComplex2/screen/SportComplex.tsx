import React from 'react';
import {View, ScrollView, Platform} from 'react-native';
import {observer} from 'mobx-react';
import {Provider} from 'react-native-paper';
import {Colors, defaultTheme, Header, ScrollHeaderPadding} from '../../ball-library';
// styles
import styleGenerator from './styles';
// local
import SportCarouselItem from '../components/SportCarousel'
import {dismissScreen} from '../library/nav';
import WorkingTime from '../components/WorkingTime'
import InfoSport from '../components/InfoSport'
import Description from '../components/Description'
import TitleBar from '../components/TitleBar'
import CategoryItem from '../components/CategoryItem'


const SportComplex = () => {
	const styles = styleGenerator();

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<Header
							title={'مجموعه ورزشی منتظری'}
							onPress={dismissScreen}
							drawBehind
							mode={'fullWidth'}
					/>
					<ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
						<ScrollHeaderPadding/>
						<SportCarouselItem/>
						<InfoSport/>
						{/*<WorkingTime/>*/}
						<Description/>
						<View style={{width: '100%', paddingHorizontal: 16}}>
							<TitleBar title={'مجموعه ها'}/>
						</View>
						{/*<Categories/>*/}
						<CategoryItem/>

					</ScrollView>
				</View>
			</Provider>
	);

};

export default observer(SportComplex);
