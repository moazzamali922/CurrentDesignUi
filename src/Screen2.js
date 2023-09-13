import {
  SafeAreaView,
  StyleSheet,
  SafeAreaViewBase,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import Header from './components/Header';
import {Searchbar} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';

const Screen2 = () => {
  const TakePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
       console.log(image)
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: '#fff'}}>
        <View
          style={{width: '90%', alignSelf: 'center', backgroundColor: '#fff'}}>
          <View style={{width: '100%', height: 50}}>
            <Header tintColor="#000" Text12="#000" />
          </View>
          <Searchbar
            placeholder="What are you looking for...."
            mode="view"
            style={{
              height: 70,
              backgroundColor: '#fff',
              borderWidth: 1,
              borderColor: '#ccc',
            }}
            iconColor="#000"
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                style={{width: 25, tintColor: '#000', height: 25}}
                source={require('../assets/categories.png')}
              />
              <Text style={{fontSize: 20, marginLeft: 10}}>Categories</Text>
            </View>
            <View style={{borderWidth: 1}} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={TakePhotoFromCamera}>
                <Image
                  style={{width: 25, tintColor: '#000', height: 25}}
                  source={require('../assets/camera.png')}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 20, marginLeft: 10}}>Camera</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
