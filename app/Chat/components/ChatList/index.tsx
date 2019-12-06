import React from 'react';
import {ListRenderItem} from 'react-native';
// styles
import styleGenerator from './styles';
//local
import {FlatList} from "react-native-gesture-handler";
import {ChatItem} from "../../library/types";
import CustomerChat from "./ChatItems/CustomerChat";
import ProviderChat from "./ChatItems/ProviderChat";
import {chatStore} from "../../store/ChatStore";

interface IChatList {
	// chatList : Array<IChatListSection>
	// chats:Array<ChatItem>
}

const ChatList = (props:IChatList) => {
	const styles = styleGenerator();
	// const {chats} = props;

	/*const renderChatItem : ListRenderItem<ChatItem> = ({item}) => {
		return(
				<ChatItems title={'امروز'} chatItem={item}/>
		)
	};*/

	const renderChatItem : ListRenderItem<ChatItem> = ({item}) => {
		if (item.userType === 'customer') {
			return <CustomerChat message={item.text}/>
		} else {
			return <ProviderChat message={item.text}/>
		}
	};

	return (
			<FlatList style={styles.chat_list} data={chatStore.getAllChats} renderItem={renderChatItem}
			          keyExtractor={(value,index) => index.toString()} inverted={true}/>
	);
};

// export default observer(ChatList);
export default ChatList;


/*
if (item.sender === 'customer'){
	return(
			<CustomerChat message={item.message} />
	)
}else {
	return (
			<ProviderChat message={item.message} />
	)
}*/
