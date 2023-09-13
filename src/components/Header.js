import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({tintColor, Text12}) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={openDrawer}>
            <Image
              style={{
                width: 27,
                height: 27,
                marginHorizontal: 10,
                tintColor: tintColor,
              }}
              source={require('../../assets/toggle.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: Text12}}>
            {' '}
            Profile
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{
              width: 27,
              height: 27,
              marginHorizontal: 10,
              tintColor: tintColor,
            }}
            source={require('../../assets/chat.png')}
          />
          <Image
            style={{width: 27, height: 27, tintColor: tintColor}}
            source={require('../../assets/Notification.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
