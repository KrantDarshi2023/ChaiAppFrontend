import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {cartStyling} from './styling/CartStyling';
import NavBar from './NavBar';

interface IcartProduct {
  quantity: number;
  product_id: number;
  product_name: string;
  image: string;
  price: number;
}

function Cart({navigation}: any) {
  const [cartProducts, setCartProducts] = useState<IcartProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    getQuantity();
    setTotal(
      cartProducts.reduce(
        (previousValue: number, item: IcartProduct) =>
          previousValue + item.price * item.quantity,
        0,
      ),
    );
  }, [cartProducts]);
  const getQuantity = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      const res = await axios.get(
        'http://localhost:1111/cart/cartDetails/' + userId,
      );
      if (res.data) {
        setCartProducts(res.data);
      }
    } catch (e) {}
  };
  const insertInMyOrders = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      const res = await axios.post(
        'http://localhost:1111/myOrder/add/' + userId,
      );
      if (res.data) {
        console.log(res.data);
        navigation.navigate('OrderPlaced');
      }
    } catch (e) {}
  };
  if (cartProducts.length === 0) {
    return (
      <View style={cartStyling.ImagemainView}>
        <Image
          style={cartStyling.EmptycartImageStyling}
          source={{
            uri: 'https://i.pinimg.com/474x/a9/38/22/a93822041ab2d6639d9722f4a063f3ab.jpg',
          }}
        />
        <NavBar navigation={navigation} />
      </View>
    );
  } else {
    return (
      <View style={cartStyling.mainView}>
        <FlatList
          data={cartProducts}
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
        <View style={cartStyling.totalView}>
          <Text style={cartStyling.totalText}> Total = {total}</Text>
          <View>
            <TouchableOpacity onPress={() => insertInMyOrders()}>
              <Image
                style={cartStyling.PlaceOrderImage}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/128/2922/2922853.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <NavBar navigation={navigation} />
      </View>
    );
  }
}

export default Cart;
