import React, {useEffect, useState} from 'react';
import {View} from 'react-native'
import {observer} from 'mobx-react';
import {defaultTheme} from "../../ball-library/theme";
import {Header, screens} from "../../ball-library";
import {dismissRatingPage} from "../library/nav";
import {Provider} from "react-native-paper";
// styles
import styleGenerator from './styles';
//local
import TitleBar from "../../ball-library/TitleBar";
import CommentList from "../components/CommentList";
import {ratingStore} from '../store/RatingStore'
import {ScrollView} from "react-native";
import RatingButton from "../components/RatingButton/RatingButton";
import Loading from "../../ball-library/Loading";
import {getSportPage} from "../../sport2/library/api";
import {sportReservationStore} from "../../sportReservation2/store/SportReservationStore";
import {getAllComments, IComment} from "../library/api";

interface IRatingPage {
	sportId: string,
	sportType:string
}

const RatingPage = (props: IRatingPage) => {

	const styles = styleGenerator();
	const {sportId,sportType} = props;

	const [loading, setLoading] = useState<boolean>(false);
	const [comments, setComments] = useState<Array<IComment>>([]);

	const getCommentsData = async () => {
		let res = await getSportPage(sportId);

		if (res.state === 'success') {
			let response = await getAllComments(sportId);

			if (response.comments !== null) {
				setComments(response.comments);

				setLoading(true);
			}
		}

	};

	useEffect(() => {
		getCommentsData()
	}, []);


	return (
			<Provider theme={defaultTheme}>
				<Header
						title={'ثبت امتیاز'}
						mode={'fullWidth'}
						drawBehind={false}
						onPress={dismissRatingPage}
				/>
				<Loading dark={true} loaded={loading} screenId={screens.ratingPage.id}>
					<View style={{flex: 1}}>
						<ScrollView style={{flex: 1, marginBottom: 55, paddingHorizontal: 8}} showsVerticalScrollIndicator={false}>
							<View style={styles.comments_container}>
								<TitleBar title={'نظرات'}/>
								<CommentList commentsList={comments}/>
							</View>
						</ScrollView>
						<RatingButton sportId={sportId} sportType={sportType}/>
					</View>
				</Loading>
			</Provider>
	);
};

export default observer(RatingPage);
