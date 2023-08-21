import {StyleSheet} from 'react-native';

export const frontStyling = StyleSheet.create({
  mainView: {
    flex: 10,
    backgroundColor: '#EAC696',
  },
  headerView: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  profilepicture: {
    height: 37,
    width: 37,
  },
  topThirdView: {
    flex: 2.5,
  },
  textView: {
    position: 'absolute',
    top: 25,
    left: 5,
  },
  text: {
    fontSize: 40,
    shadowColor: 'black',
    shadowOffset: {height: 4, width: 4},
    shadowOpacity: 0.2,
    shadowRadius: 0.4,
  },
  searchView: {
    borderRadius: 10,
    borderWidth: 3,
    position: 'absolute',
    top: 150,
    left: 40,
    width: '60%',
    height: 35,
  },
  searchLogo: {
    width: 60,
    height: 45,
    position: 'absolute',
    top: 143,
    left: 230,
    transform: [{scaleX: -1}],
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 0.4,
  },

  teaImage: {
    width: 60,
    height: 45,
    position: 'absolute',
    top: 25,
    left: 150,
  },
  biscuitImage: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 30,
    left: 225,
  },
  midThirdView: {
    flex: 3,
  },
  categories: {
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: '500',
  },
  chailogo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  chaiLogoView: {
    borderColor: '#FFF6DC',
    borderWidth: 5,
    borderBottomWidth: 10,
  },
  snacks: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  snackesLogoView: {
    borderColor: '#FFF6DC',
    borderWidth: 5,
    borderBottomWidth: 10,
  },
  categoriesView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  lastThirdView: {
    flex: 3,
  },
  YourstypePhotos: {
    height: 75,
    width: 75,
  },
  imageBackgroundView: {
    backgroundColor: '#FFF6DC',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {height: 5, width: 1},
    shadowOpacity: 0.9,
    shadowRadius: 0.4,
  },
  names: {
    fontSize: 15,
    textAlign: 'center',
  },
  navBar: {
    backgroundColor: '#FFF6DC',
    position: 'absolute',
    borderRadius: 50,
    top: 650,
    width: '100%',
    height: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 2,
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.9,
    shadowRadius: 0.4,
  },
  navBarPictures: {
    height: 40,
    width: 40,
  },
});
