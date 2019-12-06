import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {Colors} from "../../../ball-library/theme";
import {WorkPlan} from "../../library/types";

interface IWorkingTime {
	workingTime: Array<WorkPlan>
}

const WorkingTime = (props: IWorkingTime) => {

	const styles = styleGenerator();

	const {workingTime} = props;
	const maleTime = workingTime[0];
	const femaleTime = workingTime[1];

	return (
			<View style={styles.container}>

				<View style={styles.reserve_time_section}>
					<View style={styles.header_container}>
						<Text style={styles.header_text}>سانس آقایان :</Text>
					</View>
					<View style={styles.days_time}>
						{maleTime.startDay !== null && maleTime.endDay !== null &&
            <Text style={styles.days_time_text}>{maleTime.startDay} تا {maleTime.endDay}</Text>
						}
						<Text style={styles.days_time_text}>{maleTime.startTime} - {maleTime.endTime}</Text>
					</View>
					<View style={styles.days_time}>
						<Text style={styles.days_time_text}>{maleTime.day}</Text>
						<Text style={styles.days_time_text}>{maleTime.startTime} - {maleTime.endTime}</Text>
					</View>
				</View>

				<View style={styles.vertical_separator}/>

				<View style={styles.reserve_time_section}>

					<View style={styles.header_container}>
						<Text style={[styles.header_text, {color: Colors.femalePink}]}>سانس بانوان :</Text>
					</View>

					{femaleTime.startDay !== null && femaleTime.endDay !== null &&
          <View style={styles.days_time}>
            <Text
              style={[styles.days_time_text, {color: Colors.femalePink}]}>{femaleTime.startDay} تا {femaleTime.endDay}</Text>
            <Text
              style={[styles.days_time_text, {color: Colors.femalePink}]}>{femaleTime.startTime} - {femaleTime.endTime}</Text>
          </View>
					}

					<View style={styles.days_time}>
						<Text style={[styles.days_time_text, {color: Colors.femalePink}]}>{femaleTime.day}</Text>
						<Text
								style={[styles.days_time_text, {color: Colors.femalePink}]}>{femaleTime.startTime} - {femaleTime.endTime}</Text>
					</View>
				</View>
			</View>

	);
};

export default observer(WorkingTime);
