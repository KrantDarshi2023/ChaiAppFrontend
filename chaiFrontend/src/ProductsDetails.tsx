import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {productDetailsStyling} from './styling/ProductDetailsStyling';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from './NavBar';

function ProductsDetails({route, navigation}: any) {
  const [item] = route.params.databyName;
  const [NumberOfItems, setNumberOfItems] = useState(0);
  const productId = item.product_id;
  const [isDisable, setIsDisable] = useState(false);
  useEffect(() => {
    const getQuantity = async () => {
      try {
        const userId = await AsyncStorage.getItem('id');
        const res = await axios.get(
          'http://localhost:1111/cart/quantity/' + productId + '/' + userId,
        );
        if (res.data) {
          const [quantityObj] = res.data;
          setNumberOfItems(quantityObj.quantity);
        }
      } catch (e) {}
    };
    getQuantity();
  }, [productId]);
  const increaseQuantity = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      console.log(userId);
      const res = await axios.post(
        'http://localhost:1111/cart/increasequantity/' +
          productId +
          '/' +
          userId,
      );
      if (res.data) {
        const [data] = res.data;
        setNumberOfItems(data.quantity);
        setIsDisable(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const decreaseQuantity = async () => {
    try {
      const userId = await AsyncStorage.getItem('id');
      console.log(userId);
      const res = await axios.post(
        'http://localhost:1111/cart/decreasequantity/' +
          productId +
          '/' +
          userId,
      );
      if (res.data) {
        const [data] = res.data;
        setNumberOfItems(data.quantity);
        if (data.quantity === 0) {
          setIsDisable(!isDisable);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={productDetailsStyling.mainView}>
      <View style={productDetailsStyling.backImageView}>
        <Image
          style={productDetailsStyling.backImage}
          source={{uri: item.image}}
        />
      </View>
      <View style={productDetailsStyling.addToCartBox}>
        <View style={productDetailsStyling.addToCartView}>
          <Text style={productDetailsStyling.addToCartText}>Add to cart</Text>
        </View>
        <View style={productDetailsStyling.buttonView}>
          <TouchableOpacity
            disabled={isDisable}
            onPress={() => decreaseQuantity()}>
            <Image
              style={productDetailsStyling.buttons}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1936/1936503.png',
              }}
            />
          </TouchableOpacity>
          <View style={productDetailsStyling.quantityCount}>
            <Text style={productDetailsStyling.quantityCountText}>
              {NumberOfItems}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              increaseQuantity();
            }}>
            <Image
              style={productDetailsStyling.buttons}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/4604/4604818.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={productDetailsStyling.textView}>
        <Text style={productDetailsStyling.keyText}>
          Name:{' '}
          <Text style={productDetailsStyling.valueText}>
            {item.product_name} {'\n'}
          </Text>
          Price:{' '}
          <Text style={productDetailsStyling.valueText}>Rs. {item.price}</Text>
          {'\n'}
          Category:{' '}
          <Text style={productDetailsStyling.valueText}>
            {item.categories} {'\n'}
          </Text>
          Details:{' '}
          <Text style={productDetailsStyling.valueText}>
            {item.details} {'\n'}
          </Text>
        </Text>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

export default ProductsDetails;
