import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {orderPlacedImageStyling} from './styling/OrderPlacedStyling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import NavBar from './NavBar';

function OrderPlaced({navigation}: any) {
  useEffect(() => {
    EmptyCart();
  }, []);
  const EmptyCart = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      await axios.delete(
        'http://localhost:1111/cart/emptyCartDetails/' + userId,
      );
    } catch (e) {}
  };

  return (
    <View style={orderPlacedImageStyling.mainView}>
      <View style={orderPlacedImageStyling.imageStylingView}>
        <Image
          style={orderPlacedImageStyling.imageStyling}
          source={{
            uri: 'https://cdnl.iconscout.com/lottie/premium/thumb/successfully-done-5627021-4699001.gif',
          }}
        />
        <Text style={orderPlacedImageStyling.textStyle}>OrderPlaced</Text>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

export default OrderPlaced;
