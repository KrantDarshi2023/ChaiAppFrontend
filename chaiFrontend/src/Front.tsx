import React, {useState} from 'react';
import {TextInput, Text, View, Image, TouchableOpacity} from 'react-native';
import {frontStyling} from './styling/FrontStyling';
import NavBar from './NavBar';

function Front({navigation}: any) {
  const [items, setItems] = useState('');
  const getItemsOfCoffeeandChaiCategory = () => {
    navigation.navigate('ChaiAndCoffeeProducts');
  };
  const getItemsOfSnacks = () => {
    navigation.navigate('SnacksProducts');
  };
  return (
    <View style={frontStyling.mainView}>
      <View style={frontStyling.headerView}>
        <TouchableOpacity
          style={[frontStyling.navBarPictures]}
          onPress={() => console.log('chua')}>
          <Image
            style={frontStyling.navBarPictures}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/561/561184.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={frontStyling.profilepicture}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/5663/5663577.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={frontStyling.topThirdView}>
        <View style={frontStyling.textView}>
          <Text style={frontStyling.text}>{'Tea is \n Liquid Wisdom!!!'}</Text>
        </View>
        <View style={frontStyling.searchView}>
          <TextInput value={items} onChangeText={setItems} />
        </View>
        <View>
          <Image
            style={frontStyling.searchLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/6875/6875054.png',
            }}
          />
        </View>
        <View>
          <Image
            style={frontStyling.teaImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/924/924514.png',
            }}
          />
        </View>
        <View>
          <Image
            style={frontStyling.biscuitImage}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2178/2178897.png',
            }}
          />
        </View>
      </View>
      <View style={frontStyling.midThirdView}>
        <View>
          <Text style={frontStyling.categories}>Categories</Text>
        </View>
        <View style={frontStyling.categoriesView}>
          <View style={frontStyling.imageBackgroundView}>
            <View style={frontStyling.chaiLogoView}>
              <TouchableOpacity
                onPress={() => getItemsOfCoffeeandChaiCategory()}>
                <Image
                  style={frontStyling.chailogo}
                  source={{
                    uri: 'https://i.pinimg.com/474x/3a/58/a5/3a58a53b6620c2868d8f3720a451afe6.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={frontStyling.names}>Chai and coffees</Text>
          </View>
          <View style={frontStyling.imageBackgroundView}>
            <View style={frontStyling.snackesLogoView}>
              <TouchableOpacity onPress={() => getItemsOfSnacks()}>
                <Image
                  style={frontStyling.snacks}
                  source={{
                    uri: 'https://i.pinimg.com/474x/ff/3c/7c/ff3c7c62e40ce636f680f46ab53b248d.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={frontStyling.names}>Snacks</Text>
          </View>
        </View>
      </View>
      <View style={frontStyling.lastThirdView}>
        <View>
          <Text style={frontStyling.categories}>Your's type 😋</Text>
        </View>
        <View style={frontStyling.categoriesView}>
          <View style={frontStyling.imageBackgroundView}>
            <View style={frontStyling.chaiLogoView}>
              <TouchableOpacity>
                <Image
                  style={frontStyling.YourstypePhotos}
                  source={{
                    uri: 'https://i.pinimg.com/474x/c1/d3/4c/c1d34cdd37a890a703157ab6f7bd3b47.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={frontStyling.names}>Green T</Text>
          </View>
          <View style={frontStyling.imageBackgroundView}>
            <View style={frontStyling.snackesLogoView}>
              <TouchableOpacity>
                <Image
                  style={frontStyling.YourstypePhotos}
                  source={{
                    uri: 'https://i.pinimg.com/474x/06/66/5b/06665b1205e9d86ce7f7c3081ab34e3d.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={frontStyling.names}>Rusk</Text>
          </View>
          <View style={frontStyling.imageBackgroundView}>
            <View style={frontStyling.snackesLogoView}>
              <TouchableOpacity>
                <Image
                  style={frontStyling.YourstypePhotos}
                  source={{
                    uri: 'https://i.pinimg.com/474x/aa/60/1b/aa601bee86fe277af67aa63255e2e097.jpg',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={frontStyling.names}>Lime T</Text>
          </View>
        </View>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

export default Front;
