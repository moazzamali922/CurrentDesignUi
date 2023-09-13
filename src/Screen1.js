import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from './components/Header';

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          resizeMode="cover"
          style={styles.imageBackground}
          source={require('../assets/girlbg.jpg')}>
          <Header tintColor="#fff" Text12="#fff"/>
          <View style={styles.bottomContainer}>
            <Text style={styles.userName}>Rachel Brown</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.rating}>Pro Seller 4.8 ★</Text>
              <Text style={styles.location}>Los Angeles, CA 📌</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.contentBox}>
          <View style={{alignSelf: 'center', width: '90%'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View>
                <Text style={{color: '#000', textAlign: 'center'}}>36</Text>
                <Text style={{color: '#000', textAlign: 'center'}}>Orders</Text>
              </View>
              <View>
                <Text style={{color: '#000', textAlign: 'center'}}>5</Text>
                <Text style={{color: '#000', textAlign: 'center'}}>Offers</Text>
              </View>
              <View>
                <Text style={{color: '#000', textAlign: 'center'}}>2</Text>
                <Text style={{color: '#000', textAlign: 'center'}}>
                  Messages
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <Text style={{color: '#000'}}>Recently Viewed</Text>
              <Text style={{color: '#000'}}>review all</Text>
            </View>
            <View style={{padding: 15}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80}}
                  source={{
                    uri: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg',
                  }}
                />
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80}}
                  source={{
                    uri: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg',
                  }}
                />
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80}}
                  source={{
                    uri: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg',
                  }}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:10}}>
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80}}
                  source={{
                    uri: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg',
                  }}
                />
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80}}
                  source={{
                    uri: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg',
                  }}
                />
                <Image
                  resizeMode="cover"
                  style={{width: 80, height: 80}}
                  source={{
                    uri: 'https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?cs=srgb&dl=pexels-teejay-1362534.jpg&fm=jpg',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: 540,
    position: 'relative',
  },
  bottomContainer: {
    // paddingHorizontal: 40,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '80%',
  },
  userName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  rating: {
    color: '#333',
  },
  location: {
    color: '#333',
  },
  contentBox: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: '80%',
    height: 340,
    borderRadius: 20,
    marginTop: -20,
  },
});

export default Screen1;
