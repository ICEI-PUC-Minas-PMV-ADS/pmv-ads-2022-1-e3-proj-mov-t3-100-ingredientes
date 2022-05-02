import { StyleSheet } from 'react-native';

const StylesLoginPage = StyleSheet.create({
   Screen: {
      flex: 1
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
   LoginLabel: {
      fontSize: 55,
      fontWeight: '400',
      //fontFamily: 'Oxygen',
      color: '#000000',
      marginBottom: 11
   },
   AlertLabel: {
      fontSize: 15,
      color: 'red',
      alignSelf: 'center',
      paddingBottom: 20
   },
   InputLabel:{
      textTransform: 'uppercase',
      fontSize: 13,
      color: '#00000075'
   },
   Input:{
      borderBottomWidth: 1,
      marginBottom: 9,
      borderBottomColor: '#C2C2C2'
   },
   LoginButton:{
      backgroundColor: '#E05D25',
      alignItems: 'center',
      justifyContent: 'center',
      height: 62,
      width: '90%',
      borderRadius:7,
      alignSelf: 'center',
      marginBottom: 20

   },
   LoginButtonLabel:{
      color:'#FFFFFF',
      fontSize:23
   },
   LabelGeneric:{
      fontSize: 13,
      color: '#00000080'
   },
   LinkGeneric: {
      fontSize: 13,
      color: '#E05D25',
      fontWeight: '700'
   },
   CreateAccount:{
      flexDirection: 'row',
      alignSelf: 'center'
   }
})


export default StylesLoginPage;