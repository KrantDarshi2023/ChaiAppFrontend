import {StyleSheet} from 'react-native';

export const coffeeAndChaiStyling = StyleSheet.create({
  mainView: {
    flex: 10,
    backgroundColor: '#EAC696',
  },
  productImageView: {
    borderColor: '#FFF6DC',
    borderBottomWidth: 100,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 5,
  },
  productsImageStyling: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderColor: '#FFF6DC',
    borderWidth: 5,
    resizeMode: 'stretch',
  },
  textView: {
    position: 'absolute',
    top: 210,
    alignSelf: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
