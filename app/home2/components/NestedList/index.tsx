import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {observer} from 'mobx-react-lite';
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider,
} from 'recyclerlistview';
// local
import CardItem from './CardItem'
import CardHeader from './CardItem/CardHeader'

// styles
import styleGenerator from './styles';
import {Colors} from "../../../ball-library/theme";
import {HomeList, Sport} from "../../store/types";
import {HomeSportList} from "../../library/types";

// const {width} = Dimensions.get('window');
// const {height} = Dimensions.get('window');

//View types
/*const ViewTypes = {
	NORMAL: 0,
	BLUE: 1,
};*/

interface INestedList {
    homeList:Array<HomeSportList>
}

const NestedList = (props:INestedList) => {
    const styles = styleGenerator();
    const {homeList} = props;

    // layout providers
    /*const layout = new LayoutProvider(
            index => {
                if (index % 2 === 0) {
                    return ViewTypes.BLUE
                }else {
                    return ViewTypes.NORMAL
                }
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.BLUE:
                        dim.width = width;
                        dim.height = 165;
                        break;
                    case ViewTypes.NORMAL:
                        dim.width = width;
                        dim.height = 165;
                        break;

                }
            },
    );*/

    /*const layout = new LayoutProvider(
            index => 0,
            (type, dim) => {
                dim.width = width;
                dim.height = 210;
            },
    );

    const layout2 = new LayoutProvider(
            index => 0,
            (type, dim) => {
                dim.width = 90;
                dim.height = 160;
            },
    );*/

    // data providers
    /*const dt = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });

    const dt2 = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });*/

    // row renders
    /*const rowRenderer = (type: any, data: HomeList, index: number) => {
        return (
                <View style={[styles.vertical_lists, index % 2 === 1 && {backgroundColor: Colors.homeTitleBar}]}>
                    <CardHeader header_text={data.header_text}/>
                    <RecyclerListView
                            layoutProvider={layout2}
                            isHorizontal={true}
                            dataProvider={dt2.cloneWithRows(data.sports)}
                            rowRenderer={rowRenderer2}
                            style={{width: '100%', flex: 1}}
                            scrollViewProps={{
                                showsHorizontalScrollIndicator: false,
                                // style : {
                                transform: [{rotateY: '180deg'}]
                                // }
                            }}
                    />
                </View>
        );
    };

    const rowRenderer2 = (type: any, data: Sport) => {
        return (
                <CardItem id={data.id} name={data.name} discount={data.discount} address={data.address}
                          price={data.price} score={data.score} image={data.image}/>
        );
    };
*/

    return (
        <ScrollView>
            {
                homeList.map((data, index) => {
                    return (
                        <View key={index}
                              style={[styles.vertical_lists, (index % 2) != 0 && {backgroundColor: Colors.homeTitleBar}]}>

                            <CardHeader title={data.title} query={data.odataStr} />

                            <ScrollView
                                horizontal={true}
                                style={styles.horizontal_lists}
                                showsHorizontalScrollIndicator={false}>
                                {
                                    data.data.map((data, index) => {
                                        return (
                                            <CardItem key={index} sportId={data.uuid} name={data.name} discount={data.maxDiscountPrecent}
                                                      address={data.address.area} price={data.minPrice} score={data.rateAvg}
                                                      image={data.mainPicUrl}/>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    );
                })
            }
        </ScrollView>
    )


};

export default observer(NestedList);

//TYPE 1 : All ScrollView
{/*
<ScrollView>
	{
		homeStore.getHomeList.map((data, index) => {
			return (
					<View key={index} style={[styles.vertical_lists, (index % 2) != 0 && {backgroundColor: Colors.homeTitleBar}]}>

						<CardHeader header_text={data.header_text}/>

						<ScrollView
								horizontal={true}
								style={styles.horizontal_lists}
								showsHorizontalScrollIndicator={false}>
							{
								data.sports.map((data, index) => {
									return (
											<CardItem key={index} id={data.id} name={data.name} discount={data.discount}
											          address={data.address} price={data.price} score={data.score} image={data.image}/>
									)
								})
							}
						</ScrollView>
					</View>
			);
		})
	}
</ScrollView>*/
}

// TYPE 2 : All RecyclerView
{/*
<RecyclerListView
layoutProvider={layout}
dataProvider={dt.cloneWithRows(homeStore.getHomeList)}
rowRenderer={rowRenderer}
scrollViewProps={{
	style:{
		width:'100%',flex:1,height:900
	},
	contentContainerStyle:{
		width:'100%',flex:1
	}
}}
/>*/
}

//TYPE 3 : ScrollView + RecyclerView
{/*
			<ScrollView>
				{
					homeStore.getHomeList.map((data, index) => {
						return (
								<View key={index} style={[styles.vertical_lists, (index % 2) != 0 && {backgroundColor: Colors.homeTitleBar}]}>
									<CardHeader header_text={data.header_text}/>

									<RecyclerListView
											layoutProvider={layout2}
											isHorizontal={true}
											dataProvider={dt2.cloneWithRows(data.sports)}
											rowRenderer={rowRenderer2}
											style={{width: '100%', flex: 1}}
											scrollViewProps={{
												showsHorizontalScrollIndicator: false,
												// style : {
												transform: [{rotateY: '180deg'}]
												// }
											}}
									/>

								</View>
						);
					})
				}
			</ScrollView>
*/
}
