import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native'
import { observer } from 'mobx-react';
// local
import {LargeList} from "react-native-largelist-v3";
import ReserveListItem from './ResultCard'
// styles
import styleGenerator from './styles';
import {ReserveItem} from "../../library/types";

interface IReserveList {
  reserveItems : Array<ReserveItem>,
  isEmpty : boolean
}

const ReserveList = (props:IReserveList) => {
  const { styles } = styleGenerator();
  const {reserveItems,isEmpty} = props;

  /*const renderSearchResult = ({section,row} : {section : number, row : number}) => {
    return(
        <ReserveListItem row={row} section={section}/>
    )
  };*/

  const renderSearchResult  : ListRenderItem<ReserveItem> = ({item}) => {
    return(
        <ReserveListItem name={item.reserve.sportSite.name} location={item.reserve.sportSite.address.area}
                         date={item.session.date} startTime={item.session.sessionTime.startTime}
                         reserveId={item.uuid} code={item.code} />
    )
  };

  if (isEmpty){
    return (
        <View style={styles.empty_box}>
          <Text style={styles.empty_box_text}>هنوز رزروی انجام نداده اید !</Text>
        </View>
    )
  }else {
    return (
        <FlatList data={reserveItems} renderItem={renderSearchResult} keyExtractor={(value,index) => index.toString()}
                  style={styles.result_list} />
    );
  }


};

export default observer(ReserveList);

{/*<LargeList
    data={reserveItems}
    style={styles.result_list}
    bounces={false}
    heightForIndexPath={() => 89}
    renderIndexPath={renderSearchResult}/>*/}
