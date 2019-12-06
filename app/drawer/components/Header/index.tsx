import React from 'react';
import {View,Text,Image} from 'react-native';
import {Button, Icon, userProfile} from '../../../ball-library';
import {Avatar, Caption, Title} from 'react-native-paper';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {BorderlessButton} from 'react-native-gesture-handler';
import {showAuth, showProfile} from '../../library/nav';

import {observer} from 'mobx-react';
import {auth} from '../../../ball-library';
// styles
import styleGenerator from './styles';

const Header = () => {
	const {styles, avatar, icon, rippleColor} = styleGenerator();
	const onProfilePress = async () => {
		await showProfile('normal');
	};
	const onEditProfilePress = async () => {
		await showProfile('edit');
	};

	const userName = userProfile.getUserName();
	const userPhoneNumber = userProfile.getPhoneNumber();

	if (auth.isAuthorized) {
		return (
				<View style={styles.container}>
					<View style={styles.user_info_container_parent}>
						<View style={styles.image_container_box}>
							<BorderlessButton onPress={onProfilePress} rippleColor={rippleColor}>
								{/*require('../../assets/mehrdad.jpg')*/}
								{/*<Icon type={'ball'} name={'empty-profile'} size={65} color={'#7200ca'} style={{backgroundColor:'#fff',borderRadius:34}}/>*/}
								{userProfile.hasImageProfile ?
										<Image style={{width:75,height:75,borderRadius:43}} source={{uri: userProfile.getImageProfileUrl()}}/> :
										<Image source={require('../../assets/ball_profile.png')} style={{width:75,height:75,borderRadius:50}}/>
								}
							</BorderlessButton>
						</View>
						<View style={styles.user_info_container}>
							<Text style={styles.user_name_text}>{userName}</Text>
							<Text style={styles.user_phone_text}>{userPhoneNumber}</Text>
						</View>
					</View>
					<View style={styles.editProfileContainer}>
						<View style={styles.editProfileButton}>
							<BorderlessButton
									onPress={onEditProfilePress}
									rippleColor={rippleColor}
							>
								<Icon
										type={'ball'}
										name={'edit'}
										size={icon.size}
										color={icon.color}
								/>
							</BorderlessButton>
						</View>
					</View>
				</View>
		);
	} else {
		return (
				<View style={styles.container}>
					<View style={styles.profileInfoContainer}>
						<BorderlessButton onPress={showAuth} rippleColor={rippleColor}>
							<Icon
									type={'ball'}
									name={'empty-profile'}
									size={avatar.size}
									color={avatar.color}
							/>
						</BorderlessButton>
					</View>
					<View style={styles.authContainer}>
						<Button
								style={styles.authButton}
								color={'white'}
								mode={'outlined'}
								fullRadius
								onPress={showAuth}
								size={'small'}
								rippleColor={'lightGrey'}
						>
							{'ورود یا ثبت نام'}
						</Button>
					</View>
				</View>
		);
	}
};

export default observer(Header);

{/*
<View style={styles.profileInfoContainer}>
	<BorderlessButton onPress={onProfilePress} rippleColor={rippleColor}>
		{userProfile.hasImageProfile ?
				<Avatar.Image size={avatar.size} source={{uri: userProfile.getImageProfileUrl()}}/> :
				<Icon type={'ball'} name={'empty-profile'} size={avatar.size} color={avatar.color}/>
		}
	</BorderlessButton>
	<View>
		<Title style={styles.whiteRightAlign}>{userProfile.getUserName()}</Title>
		<Text style={styles.whiteRightAlign}>سید مرتضی مرتضایی محمدی راد اصل</Text>
		<Text style={styles.whiteRightAlign2}>{userProfile.getPhoneNumber()}</Text>
	</View>
</View>*/}
