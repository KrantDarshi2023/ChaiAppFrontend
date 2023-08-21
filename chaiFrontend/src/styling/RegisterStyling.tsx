import {StyleSheet} from 'react-native';

export const registerStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: 380,
    height: 812,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    fontStyle: 'italic',
    backgroundColor: '#ebc78d',
    height: 420,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  registerTextView: {
    position: 'absolute',
    bottom: 400,
    borderRadius: 10,
    backgroundColor: '#EEE0C9',
    paddingHorizontal: 10,
  },
  text: {
    color: '#d49b3f',
    fontSize: 40,
  },
  formElements: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  bottomButtonsView: {
    position: 'absolute',
    top: 407,
    borderRadius: 10,
    backgroundColor: '#EEE0C9',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  bottonLoginNavigation: {
    position: 'absolute',
    top: 450,
    borderRadius: 10,
    backgroundColor: '#EEE0C9',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  bottomFormText: {
    fontSize: 20,
    color: '#d49b3f',
  },
});
