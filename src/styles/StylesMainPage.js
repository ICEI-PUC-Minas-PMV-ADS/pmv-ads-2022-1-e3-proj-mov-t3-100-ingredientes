import { StyleSheet } from 'react-native';

const StylesMainPage = StyleSheet.create({
   Pesquisar: {
      flexDirection:"row",
      justifyContent: "space-between",
      width: '60%',
      alignSelf: "center",
      paddingTop: 10,
      
   },
   input: {
      flex: 1,
      backgroundColor:"#d3d3d3",
      borderRadius:10,
      color:"white",
      fontSize: 18,
      paddingHorizontal: 15, 
      shadowOpacity: 5,
      shadowRadius: 10,
      
   },
   search: {
      paddingHorizontal: 15, 
   },
   Textouv: {
      fontSize: 20,
      color: "#555",
   },
   ultimo: {
      paddingTop: 65,
      paddingLeft: 20,
   },
   imagemp: {
      flexDirection:"row",
      justifyContent: "space-between",
      alignSelf: "center",
      paddingTop: 60,
      
      
   },
   imagema: {
      height: 80,
      width: 80,
      padding: 50,
      margin: 10,
      
      
   },
   Textode: {
      fontSize: 10,
      color: "#555",
      justifyContent: "space-between",
      alignSelf: "center",
      paddingLeft: 20,
      paddingRight: 20,
   
   },
   textovi: {
      flexDirection:"row",
      
      alignSelf: "center",
      padding: 30,

   },
   
});

export default StylesMainPage;