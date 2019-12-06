import React, {useState} from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Icon} from "../../../ball-library";
import {chatStore} from '../../store/ChatStore'
import {userProfile} from '../../../ball-library'
import {ChatItem} from "../../library/types";

interface InputBox {
	chats: Array<ChatItem>
}


const InputBox = (props: InputBox) => {

	const styles = styleGenerator();
	const {chats} = props;


	const [chat, setChat] = useState<string>('');
	const [editable, setEditable] = useState<boolean>(true);


	const sendChat = async () => {
		//TODO => Add uuid to every chat
		if (chat !== '' && chat !== ' ' && chat !== '  ') {
			await Keyboard.dismiss();
			await setEditable(false);

			let newChat: ChatItem = {
				uuid: 'b9a4-das2-das4-aldk',
				text: chat,
				profilePicUrl: null,
				userType: 'customer'
			};
			// await chats.push(newChat);

			chatStore.addChat(newChat);

			await setChat('');
			await setEditable(true)


			//	TODO : send to server chat

		}
	};

	// console.warn('Editable', editable);
	// console.warn('Text', chat);
	// console.warn('ChatsList', chats);

	return (
			<View style={styles.input_box_container}>

				<TextInput value={chat} onChangeText={(text) => setChat(text)} multiline={true}
				           placeholder={'پیام خود را وارد کنید ...'} style={styles.input_box} editable={editable}/>

				<RectButton style={styles.send_box} onPress={sendChat}>
					<Icon type={'ion'} name={'ios-send'} color={'#fff'} size={25} style={styles.send_icon}/>
				</RectButton>

			</View>

	);
};

// export default observer(InputBox);
export default InputBox;
