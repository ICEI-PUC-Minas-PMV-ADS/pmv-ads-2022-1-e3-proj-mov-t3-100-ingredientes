import { StyleSheet } from 'react-native';

const StylesMyListRecipe = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
    },
    input: {
      flex: 1,
      height: 50,
      backgroundColor: '#ff9930',
      margin: 30,
      borderRadius: 5,
      fontSize: 19,
      paddingLeft: 15,
      paddingRight: 15,
      color: '#FFFFFF',
    },
    searchArea: {
      flexDirection: 'row',
      alignItems: 'center',

    },
    orderButton: {
      width: 32,
      marginRight: 30,
    },
    list: {
      flex: 1,
    },
  });
  export default StylesMyListRecipe;