import { StyleSheet } from 'react-native';

const StylesLoginPage = StyleSheet.create({
   Screen: {
      flex: 1,
      backgroundColor: '#FFFFFF',
   },

   Image:{
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
   },

   ImageSection: {
      flex: 99
   },
   InteractionSection: {
      flex: 131,
      backgroundColor: 'white',
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20

   },
   CreateAccount:{
      flexDirection: 'row',
      alignSelf: 'center'
   }
})


export default StylesLoginPage;