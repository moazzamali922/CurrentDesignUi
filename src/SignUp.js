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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
          style={{padding: 15, alignItems: 'center', flexDirection: 'row'}}>
          <Image
            style={{width: 35, height: 35, tintColor: '#fff'}}
            source={require('../assets/back.png')}
          />
          <Text style={{fontSize:25,color:"#fff",marginHorizontal:15,}}>Create Account</Text>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', marginBottom: 150}}>
          <View style={styles.LogoContainer}>
            <View style={styles.LogoItem}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/facebook.png')}
                  style={styles.LogoImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.LogoItem}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/instagram.png')}
                  style={styles.LogoImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.LogoItem}>
              <TouchableOpacity>
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
                Sign Up
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
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={{color: 'white', textDecorationLine: 'underline'}}>
                SignIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

export default SignUp;
