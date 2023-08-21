import {StyleSheet} from 'react-native';

export const loginStyle = StyleSheet.create({
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
    height: 100,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginTextView: {
    position: 'absolute',
    bottom: 80,
    borderRadius: 10,
    backgroundColor: '#EEE0C9',
    paddingHorizontal: 10,
  },
  bottomButtonsView: {
    position: 'absolute',
    top: 89,
    borderRadius: 10,
    backgroundColor: '#EEE0C9',
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  text: {
    color: '#d49b3f',
    fontSize: 35,
  },
  bottomFormText: {
    fontSize: 20,
    color: '#d49b3f',
  },
  formElements: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
