import React from 'react';
import {View, Text} from 'react-native';
// styles
import styleGenerator from './styles';
// local
import {Icon, ProgressBar} from '../../../ball-library';
import {IProgressBar} from "../../store/types";
import {showRatingPage} from "../../library/nav";
import TitleBar from "../../components/TitleBar";
import {RectButton} from "react-native-gesture-handler";

interface IRating {
	items:Array<IProgressBar>,
	sportId:string,
	sportType:string
}

const Rating = (props:IRating) => {
	const styles = styleGenerator();
	const {items,sportId,sportType} = props;

	const renderProgressBar = (props: IProgressBar, uniqueKey: number) => {
		const {text, value} = props;
		return (
				<View style={styles.progressBarContainer} key={uniqueKey}>
					<View style={{width: '35%'}}>
						<Text style={styles.ratting_text}>{text}</Text>
					</View>
					<View style={{justifyContent: 'center', width: '65%', marginTop: 8}}>
						<ProgressBar small={true} value={value}/>
					</View>
				</View>
		);
	};

	const handleRatingPage = async () => {
		await showRatingPage(sportId,sportType)
	};

	return (
			<View style={styles.container}>
				<TitleBar title={'امتیازات مجموعه'} fontStyle={'thin'}  />
				<View style={styles.rating_container}>
					<View style={styles.rating_row}>
						<View style={styles.rating_section}>
							<Text style={styles.rating_text}>برخورد پرسنل</Text>
							<View style={styles.star_container}>
								<Text style={styles.rate_number}>4.4</Text>
								<Icon type={'ion'} name={'md-star'} size={22} color={'#ed8a19'} />
							</View>
						</View>
						<View style={styles.rating_section}>
							<Text style={styles.rating_text}>صرفه قیمت به امکانات</Text>
							<View style={styles.star_container}>
								<Text style={styles.rate_number}>4.4</Text>
								<Icon type={'ion'} name={'md-star'} size={22} color={'#ed8a19'} />
							</View>
						</View>
					</View>
					<View style={styles.rating_row}>
						<View style={styles.rating_section}>
							<Text style={styles.rating_text}>نظافت مجموعه</Text>
							<View style={styles.star_container}>
								<Text style={styles.rate_number}>4.4</Text>
								<Icon type={'ion'} name={'md-star'} size={22} color={'#ed8a19'} />
							</View>
						</View>
						<View style={styles.rating_section}>
							<Text style={styles.rating_text}>خدمات و امکانات مجموعه</Text>
							<View style={styles.star_container}>
								<Text style={styles.rate_number}>4.4</Text>
								<Icon type={'ion'} name={'md-star'} size={22} color={'#ed8a19'} />
							</View>
						</View>
					</View>
				</View>

				<RectButton style={styles.score_btn} onPress={handleRatingPage}>
					<Text style={styles.score_btn_text}>امتیاز دهی و نظرات</Text>
				</RectButton>
			</View>
	);
};

export default Rating;



/*
{
	items.map((value, index) => {
		return (
				renderProgressBar(value, index)
		)
	})
}
<RectButton style={styles.submit_button} onPress={handleRatingPage}>
	<Text style={styles.submit_rating_text}>امتیاز دهی و نظرات</Text>
</RectButton>*/
