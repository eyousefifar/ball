import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {observer} from 'mobx-react';
import {Provider} from "react-native-paper";
// styles
import styleGenerator from './styles';
//local
import {defaultTheme} from "../../ball-library/theme";
import {auth, Header, Icon, screens} from "../../ball-library";
import {dismissChatModal} from "../library/nav";
import InputBox from '../components/InputBox'
import ChatList from '../components/ChatList'
import {chatStore} from '../store/ChatStore'
import {ChatItem} from "../library/types";
import {getAllChats, sendChatToServer} from "../library/api";
import Loading from "../../ball-library/Loading";
import {RectButton} from "react-native-gesture-handler";

interface IChatPage {
    ticketId: string,
    pageTitle: string
}

const ChatPage = (props: IChatPage) => {

    const styles = styleGenerator();
    const {pageTitle, ticketId} = props;

    const [chat, setChat] = useState<string>('');
    const [editable, setEditable] = useState<boolean>(true);

    const [loading, setLoading] = useState<boolean>(false);

    const sendChat = async () => {
        // TODO => Add uuid to every chat
        if (chat !== '' && chat !== ' ' && chat !== '  ' ) {
            // await Keyboard.dismiss();
            await setEditable(false);

            await chatStore.addChat({
                uuid: 'b9a4-das2-das4-aldk',
                profilePicUrl: null,
                text: chat,
                userType: 'customer'
            });

            await sendChatToServer(ticketId, chat, auth.getToken());

            await setChat('');
            await setEditable(true)
        }
    };

    const getData = async () => {
        let chatsRes = await getAllChats(ticketId, auth.getToken());
        if (chatsRes.state === 'success') {
            let chats = chatsRes.chats;
            // console.warn('Chats : ', chats);
            chatStore.setChats(chats.reverse());

            setLoading(true)
        }
    };

    useEffect(() => {
        getData()
    }, []);


    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={loading} screenId={screens.chatModal.id}>
                <View style={styles.container}>
                    <Header
                        title={pageTitle}
                        drawBehind={false}
                        mode={'fullWidth'}
                        onPress={dismissChatModal}
                        backgroundColor={'white'}
                    />
                    <View style={styles.container}>
                        <ChatList/>
                        {/*<InputBox chats={chats} />*/}
                        {/*TODO : Fix this later => not re rendering at this page*/}
                        <View style={styles.input_box_container}>
                            <TextInput value={chat} onChangeText={(text) => setChat(text)} multiline={true}
                                       placeholder={'پیام خود را وارد کنید ...'} style={styles.input_box}
                                       editable={editable}/>

                            <RectButton style={styles.send_box} onPress={sendChat} enabled={editable}>
                                <Icon type={'ion'} name={'ios-send'} color={'#fff'} size={25} style={styles.send_icon}/>
                            </RectButton>
                        </View>

                    </View>
                </View>
            </Loading>
        </Provider>
    );
};

export default ChatPage

// export default observer(ChatPage);
