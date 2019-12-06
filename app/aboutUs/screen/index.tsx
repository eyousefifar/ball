import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Provider, Paragraph } from 'react-native-paper';
import { defaultTheme, Header } from '../../ball-library';
import { dismissAboutUs } from '../library/nav';

// constant
import { aboutUsText } from '../constant';
// styles
import styleGenerator from './styles';

const AboutUs = () => {
  const styles = styleGenerator();
  return (
    <Provider theme={defaultTheme}>
      <Header
        title={'درباره ما'}
        drawBehind={false}
        mode={'fullWidth'}
        onPress={dismissAboutUs}
        backgroundColor={'white'}
      />
      <View style={styles.container}>
        <Image
          source={require('../assets/ball_team.png')}
          style={styles.image}
          resizeMethod={'resize'}
          resizeMode={'stretch'}
        />
        <View style={styles.aboutUsTextContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollPadding}
            indicatorStyle={'white'}
          >
            <Paragraph style={styles.text}>{aboutUsText}</Paragraph>
          </ScrollView>
        </View>
      </View>
    </Provider>
  );
};

export default AboutUs;
