import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {frontStyling} from './styling/FrontStyling';

function NavBar({navigation}: any) {
  const navigateToHomepage = () => {
    navigation.navigate('Front');
  };
  return (
    <View style={frontStyling.navBar}>
      <TouchableOpacity onPress={() => navigateToHomepage()}>
        <Image
          style={frontStyling.navBarPictures}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/1188/1188641.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyOrders')}>
        <Image
          style={frontStyling.navBarPictures}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2125/2125848.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image
          style={frontStyling.navBarPictures}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/1170/1170576.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={frontStyling.navBarPictures}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/3011/3011270.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default NavBar;
