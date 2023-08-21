import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {styles} from './styling/HomeStyling';

function Home({navigation}: any) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={styles.frontImage}
        source={{
          uri: 'https://i.pinimg.com/736x/9b/77/bc/9b77bc43e136fa149ccc6eff8f8ce80f.jpg',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Image
            style={styles.letsStart}
            source={{
              uri: 'https://i.pinimg.com/474x/7a/52/e2/7a52e290cd06c7db6c137e6093255644.jpg',
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Home;
