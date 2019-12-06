import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {Caption} from 'react-native-paper';
import {Touchable, Icon} from '../../../ball-library';

// local
import ItemList from './ItemList';

// styles
import styleGenerator from './styles';
import {IDrawerItem} from "../../store/types";

const MenuItem = (props: IDrawerItem) => {
	const {title, type, onPress, item_list_type} = props;
	const {styles, icon} = styleGenerator();
	const isExtended = type === 'itemList';

	return (
			<View style={[styles.container, isExtended && styles.extendedHeight]}>
				<View style={[styles.collapsedContainer, styles.plainHeight]}>
					<Caption style={styles.menuItemTitle}>{title}</Caption>
					<Icon
							type={'evilIcons'}
							name={'chevron-left'}
							size={icon.size}
							color={icon.color}
					/>
				</View>
				{isExtended && item_list_type != null && <ItemList type={item_list_type}/>}
				<Touchable onPress={onPress} rippleColor={'grey'}/>
			</View>
	);
};

export default observer(MenuItem);
