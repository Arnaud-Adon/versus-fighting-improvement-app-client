import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const { container, backgroundImg, title, textTitle, customButton } =
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    backgroundImg: {
      width: width,
      height: '100%',
      opacity: 0.8,
    },
    title: {
      width: width - 80,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textTitle: {
      fontFamily: 'Poppins',
      textAlign: 'center',
      fontSize: 23,
      fontWeight: 'bold',
      lineHeight: 50,
    },
    customButton: {
      borderRadius: 20,
    },
  });

export { container, backgroundImg, title, textTitle, customButton, width };
