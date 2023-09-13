import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

   const instaId = 'https://www.linkedin.com/in/moazzam-alii/'

  const instaLink = ()=>{
     Linking.openURL(instaId)
     .catch(error=>console.log(error))
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View style={{flex:1,justifyContent:"center"}}>
        <ScrollView>
          <View style={styles.LogoContainer}>
            <View style={styles.LogoItem}>
              <TouchableOpacity onPress={instaLink}>
                <Image
                  source={require('../assets/facebook.png')}
                  style={styles.LogoImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.LogoItem}>
            <TouchableOpacity onPress={instaLink}>
                <Image
                  source={require('../assets/instagram.png')}
                  style={styles.LogoImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.LogoItem}>
            <TouchableOpacity onPress={instaLink}>
                <Image
                  source={require('../assets/twitter.png')}
                  style={styles.LogoImage}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginVertical: 20}}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 16}}>
              or be Classical
            </Text>
          </View>

          <View style={styles.InputContainer}>
             <TextInput
              label="EMAIL"
              style={styles.InputStyle}
              left={<TextInput.Icon icon="email" />}
              value={text}
              onChangeText={text => setText(text)}
              keyboardType="email-address"
              secureTextEntry={true}
              autoCorrect={false}
            />

            <TextInput
              label="PASSWORD"
              style={styles.InputStyle}
              secureTextEntry={secureTextEntry}
              autoCorrect={false}
              value={password}
              onChange={text => setPassword(text)}
              left={<TextInput.Icon icon="lock" />}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? 'eye-off' : 'eye'}
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                  }}
                />
              }
            />
          </View>

          <View style={{paddingHorizontal: 20}}>
            <TouchableOpacity
              //  onPress={() => navigation.navigate('Root',{screen:'Screen1'})}
              onPress={() => navigation.navigate('Root', {screen: 'Screen1'})}
              style={{
                backgroundColor: '#bb2ddd',
                borderRadius: 7,
                borderColor: '#fff',
                width: '100%',
                height: 40,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontSize: 20,
                  marginBottom: 4,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 20,
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: 'white', textDecorationLine: 'underline'}}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#5d0e70',
  },
  LogoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 40,
  },
  LogoImage: {
    width: 50,
    height: 50,
  },
  InputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  InputStyle: {
    marginVertical: 15,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#fff',
    fontSize: 15,
  },
});

export default SignIn;
