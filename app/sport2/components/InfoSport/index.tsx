import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, ToastAndroid} from 'react-native';
import {observer} from 'mobx-react';
import LottieView from 'lottie-react-native';
// import {debounce} from 'lodash/debounce'
import {debounce} from 'lodash'
import {useDebounce} from "use-debounce";


// styles
import styleGenerator from './styles';
// local
import {BorderlessButton} from "react-native-gesture-handler";
import {auth, Colors, Icon, mapLink, screens} from "../../../ball-library";
import {showChatModal} from "../../library/nav";
import {likeSport, makeTicket, removeLike} from "../../library/api";
import showOverlay from "../../../ball-library/navigation/showOverlay";


interface IInfoSport {
	sportId: string,
	sportName: string,
	coordinateAddress: [number, number],
	address: string,
	likedId: string
}

const InfoSport = (props: IInfoSport) => {
	const animation = useRef(null);

	const styles = styleGenerator();

	const {sportId, sportName, address, coordinateAddress, likedId} = props;


	const [like, setLike] = useState<boolean>(likedId !== '');
	const [likeId, setLikeId] = useState<string>(likedId);

	const [debouncedLike] = useDebounce<boolean>(like, 500);
	const prevDebouncedLike = usePrevious(debouncedLike);


	useEffect(() => {
		if (likedId !== '') {
			setLike(true);
			// @ts-ignore
			animation.current.play(0, 120);
		}
	}, []);

	useEffect(() => {
		if (prevDebouncedLike !== debouncedLike && prevDebouncedLike !== undefined) {
			if (debouncedLike)
				likeSportItem(sportId);
			else
				dislikeSportItem(likeId)
		}
	}, [debouncedLike]);

	// Custom hook
	function usePrevious(value: any) {
		// The ref object is a generic container whose current property is mutable ...
		// ... and can hold any value, similar to an instance property on a class
		const ref = useRef();

		// Store current value in ref
		useEffect(() => {
			ref.current = value;
		}, [value]); // Only re-run if value changes

		// Return previous value (happens before update in useEffect above)
		return ref.current;
	}


	const likeSportItem = async (sportId: string) => {
		let resLike = await likeSport(sportId, auth.getToken());

		if (resLike.state === 'success') {
			setLikeId(resLike.likeId);
			ToastAndroid.show('به علاقه مندی ها افزوده شد', ToastAndroid.SHORT)
		} else
			ToastAndroid.show('خطای سرور', ToastAndroid.SHORT)
	};
	const dislikeSportItem = async (likeId: string) => {
		let resRemoveLike = await removeLike(likeId, auth.getToken());

		if (resRemoveLike)
			ToastAndroid.show('حذف گردید', ToastAndroid.SHORT);
		else
			ToastAndroid.show('خطای سرور در حذف', ToastAndroid.SHORT);
	};


	const likeUnAuthenticated = () => {
		ToastAndroid.show('برای علاقه مندی باید ورود کنید', ToastAndroid.SHORT)
		// await showOverlay({
		// 	...screens.authNeeded
		// });
	};

	const animateHeart = async () => {
		if (auth.isAuthorized) {
			if (!like) {
				await setLike(true);
				// 	@ts-ignore
				animation.current.play(0, 120);
			} else {
				await setLike(false);
				// @ts-ignore
				animation.current.reset();
			}
			// await checkLike(like)
		} else {
			likeUnAuthenticated()
		}
	};

	const onMapPress = async () => {
		await mapLink({
			lat: coordinateAddress[0],
			long: coordinateAddress[1]
		});
	};

	const handleSupportPage = async () => {
		let ticketRes = await makeTicket(sportId, auth.getToken());
		if (auth.isAuthorized) {
			if (ticketRes.state === 'success') {
				let ticketId = ticketRes.ticketId;
				await showChatModal(ticketId, sportName)
			} else {
				ToastAndroid.show('خطای سرور لطفا بعدا دوباره امتحان کنید', ToastAndroid.SHORT)
			}
		} else {
			ToastAndroid.show('برای ارتباط با پشتیبانی باید ورود کنید', ToastAndroid.SHORT)
		}
	};

	return (
			<View style={styles.container}>
				<View style={styles.icons_container}>

					<BorderlessButton onPress={handleSupportPage} style={styles.icon_container}>
						<Icon type={'ball'} name={'support'} color={Colors.titleBarLines} size={22}/>
					</BorderlessButton>

					<BorderlessButton onPress={onMapPress} style={styles.icon_container}>
						<Icon type={'simpleLine'} name={'location-pin'} color={Colors.titleBarLines} size={22}/>
					</BorderlessButton>

					<TouchableWithoutFeedback onPress={animateHeart} style={{backgroundColor: 'yellow'}}>
						<LottieView
								ref={animation}
								source={require('../../assets/lf30_editor_XRaRXU.json')} loop={false}
								speed={1.5}
								style={{width: 50, height: 50}}/>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.address_box_container}>
					<View style={styles.address_label_container}>
						<Text style={styles.address_label_text}>آدرس : </Text>
					</View>

					<View style={styles.address_container}>
						<Text style={styles.address_text}>{address}</Text>
					</View>
				</View>
			</View>
	);
};

export default observer(InfoSport);


{/*
<View>
	<RectButton style={styles.button_container} onPress={onMapPress}>
		<Icon type={"simpleLine"} name={'location-pin'} color={'#fff'} size={23}/>
		<Text style={styles.button_text}>مکان نما</Text>
	</RectButton>

	<RectButton style={[styles.button_container, {marginTop:4}]} onPress={handleChatModal}>
		<Icon type={"ball"} name={'support'} color={'#fff'} size={23}/>
		<Text style={styles.button_text}>پشتیبانی</Text>
	</RectButton>

</View>*/
}
