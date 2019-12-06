import React from 'react';
import {FlatList, ListRenderItem, View} from 'react-native'
import {observer} from 'mobx-react';
// local
import {LargeList} from "react-native-largelist-v3";
import {supportListStore} from '../../store/SupportStore'
import SearchResultItem from './ResultCard'
// styles
import styleGenerator from './styles';
import {Ticket} from "../../library/types";

interface ISearchResultList {
	ticketList:Array<Ticket>
}

const SupportResultList = (props: ISearchResultList) => {
	const {styles} = styleGenerator();
	const {ticketList} = props;

	const renderSearchResult : ListRenderItem<Ticket> = ({item}) => {
		return (
			<SearchResultItem sportSiteAddress={item.sportSite.address.area} sportSiteName={item.sportSite.name}
							  ticketId={item.uuid} sportSiteNumber={item.sportSite.tel[0]} />
		)
	};


	return (
		<FlatList data={ticketList} renderItem={renderSearchResult} keyExtractor={(value,index) => index.toString()}
				  style={styles.result_list} />
	);
};

export default observer(SupportResultList);


{/*
<LargeList
	data={supportListStore.getSupportListFull}
	style={styles.result_list}
	// bounces={false}
	heightForIndexPath={() => 89}
	renderIndexPath={renderSearchResult}/>*/}
