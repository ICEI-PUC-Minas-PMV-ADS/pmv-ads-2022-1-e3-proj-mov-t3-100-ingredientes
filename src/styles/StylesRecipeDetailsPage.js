import { StyleSheet } from 'react-native';

const StylesRecipeDetailsPage = StyleSheet.create({
    titleSection: {
      
    },
    ContentSection: {
      flex: 1, 
      alignItems: 'center'
    },
    BottomSection: {
      flex: 1, 
      alignItems: 'center', 
      flexDirection: 'row'
    },
    ScrollViewText: {
      flex: 1,
      width: '80%',
      marginHorizontal: 20, 
      marginBottom: 20,
    },
    Image: {
      width: '60%', 
      height: '60%', 
      borderRadius: 7
    },
    ImageEditing: {
      width: '40%', 
      height: '40%', 
      borderRadius: 7
    },
    InputAreaContent: {
      width: '100%',
      height: 100,
      borderRadius:7,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.40,
      shadowRadius: 3.84,
      shadowColor: "#000",
      elevation: 5,
      backgroundColor: '#fff',
    },
    InputAreaOneLine: {
      margin: 16,
      width: '80%',
      borderRadius:7,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.40,
      shadowRadius: 3.84,
      shadowColor: "#000",
      elevation: 5,
      backgroundColor: '#fff',
    },
  });
  export default StylesRecipeDetailsPage;