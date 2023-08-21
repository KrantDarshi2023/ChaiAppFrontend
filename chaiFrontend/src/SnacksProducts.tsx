import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {coffeeAndChaiStyling} from './styling/ChaiAndCoffeePageStyling';
import NavBar from './NavBar';

function SnacksProducts({navigation}: any) {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        const res = await axios.get(
          'http://localhost:1111/products/byCategory/Snacks',
        );
        if (res.data) {
          setProducts(res.data);
        }
      } catch (e) {}
    };
    getAll();
  }, []);
  const getItemsDetails = async (name: string) => {
    try {
      const res = await axios.get(
        'http://localhost:1111/products/byName/' + name,
      );
      if (res.data) {
        navigation.navigate('ProductsDetails', {databyName: res.data});
        console.log(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={coffeeAndChaiStyling.mainView}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => getItemsDetails(item.product_name)}>
            <View style={coffeeAndChaiStyling.productImageView}>
              <Image
                style={coffeeAndChaiStyling.productsImageStyling}
                source={{uri: item.image}}
              />
              <View style={coffeeAndChaiStyling.textView}>
                <Text style={coffeeAndChaiStyling.text}>
                  Name: {item.product_name} {'\n'}
                  Price: {item.price}
                  {'\n'}
                  Category: {item.categories}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <NavBar navigation={navigation} />
    </View>
  );
}

export default SnacksProducts;
