import { StyleSheet } from 'react-native';

const StylesContactPage = StyleSheet.create({
   PersonSection:{
      flexDirection: 'row', 
      marginHorizontal: 30,
      marginTop: 20
   },
   LinksSection:{
      flexDirection: 'row',
      flex: 1, 
      justifyContent:'flex-end'
   },
   Link:{
      marginLeft: 5
   }

});

export default StylesContactPage;