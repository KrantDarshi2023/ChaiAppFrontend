import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {registerStyle} from './styling/RegisterStyling';
import axios from 'axios';

function Register({navigation}: any) {
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const url = 'http://localhost:1111/users/add';
  const register = async () => {
    try {
      const res = await axios.post(url, {
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        address: address,
        age: age,
        email: email,
        password: password,
      });
      if (res.status === 200) {
        console.log(res.data);
        navigation.navigate('Login');
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
        <View style={registerStyle.form}>
          <View style={registerStyle.registerTextView}>
            <Text style={registerStyle.text}>Register</Text>
          </View>
          <View style={registerStyle.formElements}>
            <TextInput
              value={first_name}
              placeholder="enter your firstname here"
              onChangeText={setFirst_Name}
              autoCapitalize="none"
            />
            <TextInput
              value={last_name}
              placeholder="enter your lastname here"
              onChangeText={setLast_Name}
              autoCapitalize="none"
            />
            <TextInput
              value={gender}
              placeholder="enter your gender here"
              onChangeText={setGender}
            />
            <TextInput
              value={address}
              placeholder="enter your address here"
              onChangeText={setAddress}
              autoCapitalize="none"
            />
            <TextInput
              value={age}
              placeholder="enter your age here"
              onChangeText={setAge}
            />
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
          <View style={registerStyle.bottomButtonsView}>
            <TouchableOpacity onPress={() => register()}>
              <Text style={registerStyle.bottomFormText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={registerStyle.bottonLoginNavigation}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={registerStyle.bottomFormText}>
                Already a user?Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Register;
