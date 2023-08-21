import {StyleSheet} from 'react-native';

export const productDetailsStyling = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#EAC696',
    overflow: 'scroll',
  },
  backImageView: {
    flex: 0.4,
    shadowColor: 'black',
    shadowOffset: {height: 5, width: 1},
    shadowOpacity: 0.9,
    shadowRadius: 0.4,
  },
  backImage: {
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 10,
  },
  textView: {
    flex: 0.5,
    alignSelf: 'center',
    backgroundColor: '#FFF6DC',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 10,
  },
  keyText: {
    fontSize: 20,
    color: 'black',
  },
  valueText: {
    fontSize: 20,
    color: '#982176',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttons: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
    marginHorizontal: 30,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 2},
    shadowOpacity: 0.9,
    shadowRadius: 0.4,
  },
  addToCartView: {
    alignSelf: 'center',
  },
  addToCartText: {
    fontSize: 20,
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.6,
    shadowRadius: 0.3,
  },
  addToCartBox: {
    height: 65,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    margin: 20,
    backgroundColor: '#FFF6DC',
    shadowColor: 'black',
    shadowOffset: {height: 5, width: 1},
    shadowOpacity: 0.9,
    shadowRadius: 0.4,
  },
  quantityCount: {
    borderWidth: 2,
    borderRadius: 5,
    minWidth: 70,
    height: 30,
    margin: 7,
  },
  quantityCountText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
