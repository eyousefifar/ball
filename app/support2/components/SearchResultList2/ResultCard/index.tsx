import React from 'react';
import {Image, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import ReserveButton from './ReserveButton'
import MoreInfoSearchResult from "./MoreInfoSearchResult/MoreInfoSearchResult";
import {supportListStore} from "../../../store/SupportStore";
import {Radius} from "../../../../ball-library/theme";


interface IListData {
	sportSiteName:string,
	sportSiteAddress:string,
	ticketId:string,
	sportSiteNumber:string
}

const SearchResultItem = (props: IListData) => {
	const styles = styleGenerator();
	const {sportSiteNumber, sportSiteName, sportSiteAddress, ticketId } = props;

	return (
			<View style={styles.container}>

				<View style={styles.info_box}>

					<View style={styles.result_container}>
						{/*TODO => get image address from server*/}
						<Image source={require('../../../assets/1.jpg')} style={styles.image_sport_site}/>
						<MoreInfoSearchResult name={sportSiteName} address={sportSiteAddress} />
					</View>
					<ReserveButton pageTitle={sportSiteName} ticketId={ticketId} sportSiteNumber={sportSiteNumber}/>
				</View>

				<View style={styles.result_separator}/>

			</View>
	);
};

export default observer(SearchResultItem);
