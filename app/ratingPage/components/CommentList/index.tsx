import React from 'react';
import {View, FlatList, Text, Image, ListRenderItem} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {Comment} from "../../store/types";
import {Icon} from "../../../ball-library";
import {IComment} from "../../library/api";


interface ICommentList {
	commentsList: Array<IComment>
	// commentsList: Array<Comment>
}

const CommentList = (props: ICommentList) => {
	const styles = styleGenerator();

	const {commentsList} = props;

	// const renderCommentList : ListRenderItem<IComment> = ({item}) => {
	const renderCommentList : ListRenderItem<IComment> = ({item}) => {
		return(
				<View style={styles.comment_container}>

					<View style={styles.top_section}>
						<View style={styles.avatar_container}>
							<Image source={require('../../assets/user-icon.jpg')} style={{width:43,height:43}}/>
						</View>

						<View style={styles.user_info}>
							{/*TODO => Change by user name*/}
							<Text style={styles.user_name_text}>نام کاربر</Text>
							<View style={styles.rating_container}>
								<Icon type={'ion'} name={'md-star'} size={14} color={'#525252'} />
								{/*TODO => Change by user score*/}
								<Text style={styles.score_text}>4</Text>
							</View>
						</View>

					</View>

					<View style={styles.comment_content_container}>
						<Text style={styles.comment_text}>{item.text}</Text>
					</View>

					<View style={styles.line} />

				</View>
		)
	};

	return (
			<View style={styles.container}>
				<FlatList
						data={commentsList}
						style={styles.comment_list}
						renderItem={renderCommentList}
						keyExtractor={(value, index) => index.toString()}
						showsVerticalScrollIndicator={false}/>
			</View>
	);
};

export default observer(CommentList);
