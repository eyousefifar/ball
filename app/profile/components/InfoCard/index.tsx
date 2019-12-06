import React from 'react';
import {View} from 'react-native';
import {Observer} from 'mobx-react-lite';

// internal component
import ProfileAvatar from '../ProfileAvatar';
import Info from './Info';
import EditInfo from './EditInfo';
import ActionButtons from './ActionButtons';
// styles
import styleGenerator from './styles';
import UIClass from './UI';
import {userProfile} from "../../../ball-library";

// types
interface IInfoCard {
	mode: 'edit' | 'normal';
}

const InfoCard = (props: IInfoCard) => {
	const {mode} = props;
	const UI = new UIClass(mode);
	const styles = styleGenerator();


	return (
			<Observer>
				{() => (
						<View style={[styles.container, UI.editInformation ? styles.containerHeight90 : styles.containerHeight50]}>
							<ProfileAvatar/>
							{UI.editInformation ?
									<EditInfo setEditInformationOff={UI.setEditInformationOff} /> :
									<Info setEditInformationOn={UI.setEditInformationOn}/>}
						</View>
				)}
			</Observer>
	);
};

export default InfoCard;
