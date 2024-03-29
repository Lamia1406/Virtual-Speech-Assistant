import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import Button from './Partials/Button';
const win = Dimensions.get('window');
const arrowRight = require('../assets/images/icons/arrow_right.png');
const robotImg = require('../assets/images/robot_img.png');
const swipeLeft = require('../assets/images/icons/swipe.png');
const LandingPage1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.main}>
        <View style={styles.hero_img}>
          <Image source={swipeLeft} style={{ height: win.height * 0.01 / 2, width: win.width / 10 }} resizeMode='contain' />
          <Image source={robotImg} style={{ height: win.height * 2 / 5, width: win.width * 3 / 4 }} resizeMode='contain' />
        </View>
        <View style={styles.hero_container}>
          <Text style={[styles.hero_heading]}>Hello there !</Text>
          <Text style={styles.hero_txt}>I am Evie , your personal AI assistant
            i am here to make your day brighter and your tasks a little bit easier !
          </Text>
        </View>
        <View style={styles.btn_container}>
          <Button title='Next' color='#0ABAB5' background='white' font_size={16} icon={arrowRight} height={24} width={24} icon_dir='right' onPress={() => navigation.navigate('LandingPage2')} />
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 36,
    backgroundColor: '#0ABAB5',
    justifyContent: 'space-between'

  },
  hero_img: {
    alignItems: 'center'
  },
  hero_container: {
    gap: 32,
    alignItems: 'center'
  },
  hero_heading: {
    color: 'white',
    fontSize: 32
  },
  hero_txt: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white'
  },
  btn_container: {
    paddingBottom: 36,
    alignItems: 'center'
  }

});
export default LandingPage1;
