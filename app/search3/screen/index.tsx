import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-native-paper';
import {Colors, defaultTheme, Header} from '../../ball-library';
import {observer} from "mobx-react";
// styles
import {searchStyle as styleGenerator} from './styles';
//local
import SearchBackground from "../components/SearchBackground";
import {searchStoreClass} from '../store/SearchStore'
import {popSearchScreen} from "../library/nav";
import SearchResultList from '../components/SearchResultList2'
import CategoryFilter from "../components/CategoryFilter2";
import {toggleDrawer} from "../library/nav";
import SearchBar from '../components/SearchBar'
import MapSearchBar from '../components/MapSearchBar'
import TitleBar from '../components/TitleBar'
import Switch from '../components/Switch'

interface ISearch {
	isMap: boolean;
}

const Search = (props: ISearch) => {

	const styles = styleGenerator();

	const [isMap, toggleMapState] = useState(props.isMap);

	const firstLaunch = async () => {
		await searchStoreClass.getAllReserveList()
	};

	useEffect(() => {
		searchStoreClass.reset();
		firstLaunch();
	},[]);


	const handleSwitchChange = async (state:'مرد'|'زن') => {
		await searchStoreClass.setGenderState(state);
		await searchStoreClass.getAllReserveList()
	};

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<SearchBackground
							isSearch={!isMap}
							isMapSearch={isMap}
					/>
					<Header
							title={'جستجو'}
							mode={'fullWidth'}
							drawBehind={false}
							onPress={popSearchScreen}
					/>
					<View style={[styles.searchContainer, isMap && styles.primaryPurpleBackground]}>
						{isMap && (
								<View style={{width:'100%', height:190,paddingHorizontal:12,paddingVertical:12,borderRadius:16}}>
									<MapSearchBar mapSwitch={() => toggleMapState(false)}/>
									<TitleBar title={'فیلتر'} titleColor={Colors.whiteBall} fontStyle={'thick'} lineColor={Colors.whiteBall}/>
									{/*<Switch />*/}
									<CategoryFilter border={true} elevation={false} />
								</View>
						)}
						{
							!isMap && (
									<View style={styles.search_state}>
										<SearchBar
												searchText={'سالن ورزش'}
												onMenuPress={toggleDrawer}
												onMapButtonPress={() => toggleMapState(true)}
										/>
										<TitleBar title={'فیلتر'} fontStyle={'thin'}/>
										<Switch border={true} onChangeSwitch={handleSwitchChange}/>
										<View style={{marginBottom: 8}}>
											<CategoryFilter elevation={true} border={false}/>
										</View>
									</View>
							)}
						{!searchStoreClass.searchResultEmpty && !isMap && (
								<View style={{flexGrow:1,paddingHorizontal:16}}>
									<TitleBar title={'نتایج جستجو'} fontStyle={'thin'}/>
									<SearchResultList searchItems={searchStoreClass.getSearchResult}/>
								</View>
						)}
					</View>
				</View>
			</Provider>
	);

};

export default observer(Search);
