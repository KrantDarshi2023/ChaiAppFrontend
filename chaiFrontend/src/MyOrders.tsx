import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {cartStyling} from './styling/CartStyling';
import NavBar from './NavBar';

function MyOrders({navigation}: any) {
  const [allOrders, setAllOrders] = useState<any>([]);
  useEffect(() => {
    getMyOrders();
  }, []);
  const getMyOrders = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      const res = await axios.get(
        'http://localhost:1111/myOrder/all/' + userId,
      );
      if (res.data) {
        setAllOrders(res.data);
      }
    } catch (e) {}
  };
  return (
    <View style={cartStyling.mainView}>
      <FlatList
        data={allOrders}
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View>
                <View style={cartStyling.productImageView}>
                  <Image
                    style={cartStyling.productsImageStyling}
                    source={{uri: item.image}}
                  />
                </View>
                <View style={cartStyling.textView}>
                  <Text style={cartStyling.text}>
                    OrderID: {item.order_id}
                    {'\n'}
                    Name: {item.product_name}
                    {'\n'}
                    Price: Rs. {item.price}
                    {'\n'}
                    ProductID: {item.product_id}
                    {'\n'}
                    Quantity: {item.quantity}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <NavBar navigation={navigation} />
    </View>
  );
}

export default MyOrders;
