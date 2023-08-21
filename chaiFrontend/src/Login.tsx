import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {registerStyle} from './styling/RegisterStyling';
import {loginStyle} from './styling/LoginStyling';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:1111/users/login';
  const login = async () => {
    try {
      const res = await axios.post(url, {
        email: email,
        password: password,
      });
      if (res.data === 'Wrong Credentials') {
        console.log(res.data);
        Alert.alert(res.data);
      } else if (res.data === 'Please Enter credentials') {
        Alert.alert(res.data);
      } else {
        console.log(res.data);
        const _storeData = async () => {
          try {
            await AsyncStorage.setItem('token', res.data.token);
            // await AsyncStorage.setItem('id', String(res.data.id));
            console.log(await AsyncStorage.setItem('id', String(res.data.id)));
          } catch (error) {
            // Error saving data
          }
        };
        _storeData();
        navigation.navigate('Front');
      }
    } catch (e) {}
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={registerStyle.backgroundImage}
        source={{
          uri: 'https://i.pinimg.com/474x/9b/77/bc/9b77bc43e136fa149ccc6eff8f8ce80f.jpg',
        }}>
        <View style={loginStyle.form}>
          <View style={loginStyle.loginTextView}>
            <Text style={loginStyle.text}>Login</Text>
          </View>
          <View style={loginStyle.formElements}>
            <TextInput
              value={email}
              placeholder="enter your email here"
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            <TextInput
              value={password}
              placeholder="enter your password here"
              onChangeText={setPassword}
              autoCapitalize="none"
            />
          </View>
          <View style={loginStyle.bottomButtonsView}>
            <TouchableOpacity onPress={() => login()}>
              <Text style={loginStyle.bottomFormText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Login;
