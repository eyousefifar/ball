import React from 'react';
import {ListRenderItem, View} from 'react-native';
import {observer} from 'mobx-react';
import {FlatList} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import CustomerChat from "./CustomerChat";
import ProviderChat from "./ProviderChat";
import {ChatItem} from "../../../library/types";

interface IChatItems {
	// chatItems: Array<ChatItem>,
	chatItem: ChatItem,
	title: string
}

const ChatItems = (props: IChatItems) => {
	const styles = styleGenerator();
	const {chatItem, title} = props;

	/*const renderChatItems : ListRenderItem<ChatItem> = ({item}) => {
		if (item.userType === 'customer'){
			return <CustomerChat message={item.text} />
		}else {
			return <ProviderChat message={item.text} />
		}
	};*/

	const renderChatItems = (chatItem: ChatItem) => {
		if (chatItem.userType === 'customer') {
			return <CustomerChat message={chatItem.text}/>
		} else {
			return <ProviderChat message={chatItem.text}/>
		}
	};


	return (
			<View style={styles.container}>
				{/*<TitleBar title={title} />*/}
				{/*<FlatList data={chatItems} style={{width:'100%'}} renderItem={renderChatItems} keyExtractor={(value,index) => index.toString()} inverted={true}/>*/}
				{renderChatItems(chatItem)}
			</View>

	);
};

export default observer(ChatItems);
