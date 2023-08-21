import {StyleSheet} from 'react-native';

export const cartStyling = StyleSheet.create({
  mainView: {
    flex: 10,
    backgroundColor: '#EAC696',
  },
  productImageView: {
    borderColor: '#FFF6DC',
    borderBottomWidth: 130,
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
  totalView: {
    position: 'absolute',
    top: 570,
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'space-around',
    marginBottom: 40,
    backgroundColor: '#FFF6DC',
    alignItems: 'center',
    borderRadius: 40,
    width: 375,
  },
  totalText: {
    fontSize: 25,
    marginBottom: 12,
  },
  PlaceOrderImage: {
    height: 50,
    width: 50,
    marginBottom: 5,
  },
  EmptycartImageStyling: {
    height: 300,
    width: 250,
    borderRadius: 20,
    alignSelf: 'center',
  },
  ImagemainView: {
    flex: 1,
    backgroundColor: '#EAC696',
    justifyContent: 'center',
  },
});
