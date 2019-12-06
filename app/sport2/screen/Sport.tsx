import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Provider} from 'react-native-paper';
import {
	defaultTheme,
	ScrollHeaderPadding,
	Header, screens, auth,
} from '../../ball-library';
// styles
import styleGenerator from './styles';
// local
import SportCarouselItem from '../components/SportCarousel'
import Rating from '../components/Rating';
import InfoSport from '../components/InfoSport'
import WorkingTime from '../components/WorkingTime'
import Description from '../components/Description'
import {dismissSport} from "../library/nav";
import {sportReservationStore} from "../../sportReservation2/store/SportReservationStore";
import {getSportPage, isLikedUser} from "../library/api";
import {sportStore} from '../store/SportStore'
import {WorkPlan} from "../library/types";
import Loading from "../../ball-library/Loading";


interface ISport {
	sportId: string
}

const Sport = (props: ISport) => {
	const styles = styleGenerator();
	const {sportId} = props;

	const [sportName, setSportName] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [coordinate, setCoordinate] = useState<[number, number]>([0, 0]);
	const [description, setDescription] = useState<string>('');
	const [workTimes, setWorkTimes] = useState<Array<WorkPlan>>([
		{
			startTime: '12',
			endTime: '16',
			day: 'جمعه',
			startDay: 'شنبه',
			endDay: 'پنج شنبه'
		},
		{
			startTime: '12',
			endTime: '16',
			day: 'جمعه',
			startDay: 'شنبه',
			endDay: 'پنج شنبه'
		}
	]);
	const [sportType, setSportType] = useState<string>('');

	const [likeId,setLikeId] = useState<string>('');

	const [loading, setLoading] = useState<boolean>(false);


	const getSportData = async () => {
		let res = await getSportPage(sportId);

		if (auth.isAuthorized){
			let resLike = await isLikedUser(sportId,auth.getToken());
			if(resLike.state === 'success'){
				await setLikeId(resLike.likeId)
			}
		}

		if (res.state === 'success') {
			if (res.responseJson !== null) {
				let sportName = res.responseJson.name;
				let address = `${res.responseJson.address.city}-${res.responseJson.address.area}`;
				let coordinate = res.responseJson.address.coordinateAddress;
				let description = res.responseJson.description;
				let workingTime = res.responseJson.workPlans;
				let sportType = res.responseJson.type;


				setSportName(sportName);
				setAddress(address);
				setCoordinate(coordinate);
				setDescription(description);
				if (workingTime.length !== 0){
					setWorkTimes(workingTime);
				}
				setSportType(sportType);

				setLoading(true)
			}
		}
	};

	useEffect(() => {
		sportReservationStore.reset();
		getSportData()
	}, []);



	return (
			<Provider theme={defaultTheme}>

				<Loading dark={true} loaded={loading} screenId={screens.sport.id}>
					<View style={styles.container}>
						<Header
								title={sportName}
								mode={'fullWidth'}
								onPress={dismissSport}
								drawBehind
						/>
						<ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
							<ScrollHeaderPadding/>
							<SportCarouselItem sportCarousels={sportStore.getCarouselItems}/>
							<InfoSport sportId={sportId} address={address} coordinateAddress={coordinate} likedId={likeId} sportName={sportName}/>
							<WorkingTime workingTime={workTimes}/>
							<Description description={description}/>
							<Rating items={sportStore.getRattingItems} sportId={sportId} sportType={sportType}/>
						</ScrollView>
					</View>
				</Loading>

			</Provider>
	);
};

export default observer(Sport);
