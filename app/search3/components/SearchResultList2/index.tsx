import React from 'react';
import {FlatList, ListRenderItem} from "react-native";
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {SearchItem} from "../../library/types";
import SearchResultItem from './ResultCard'


interface ISearchResultList {
    searchItems: Array<SearchItem>
}

const SearchResultList = (props: ISearchResultList) => {
    const {styles} = styleGenerator();
    const {searchItems} = props;

    const renderSearchResult: ListRenderItem<SearchItem> = ({item}) => {
        return (
            <SearchResultItem name={item.name} score={item.rateAvg} price={item.minPrice}
                              location={item.address.descriptiveAddress} coordinate={item.address.coordinateAddress}
                              sportId={item.uuid} discount={item.maxDiscountPrecent}/>
        )
    };


    return (
        <FlatList data={searchItems}
                  renderItem={renderSearchResult}
                  keyExtractor={(value, index) => index.toString()}
                  style={styles.result_list}/>

    );
};

export default observer(SearchResultList);


/*
<LargeList
          data={storeClass.searchResultFull}
          style={styles.result_list}
          bounces={false}
          heightForIndexPath={() => 89}
          renderIndexPath={renderSearchResult}/>
*/
