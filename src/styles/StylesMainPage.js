import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';

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
      
      justifyContent: "space-between",
      marginTop: 25,
      margin: 5,
      flexDirection: "row",
      backgroundColor: "#E9795D",
      borderRadius: 10,
      
   
   },
   imagemp: {
      
      justifyContent: "space-between",
      marginTop: 25,
      margin: 5,
      flexDirection: "row",
      backgroundColor: "#E9795D",
      borderRadius: 10
   
   },
   imagemp: {
      
      justifyContent: "space-between",
      marginTop: 25,
      margin: 5,
      flexDirection: "row",
      backgroundColor: "#E9795D",
      borderRadius: 10
   
   },
   imagema: {
      height: 80,
      width: 80,
      padding: 50,
      margin: 10,
   },
 
  

   imagemmain1: {
       marginTop: 5,
      flexDirection:"row",
      alignSelf: "center",
   },
   imagemmain2: {
      marginTop: 0,
      flexDirection:"row",
      alignSelf: "center",
   },
   
  
   ImagemPostada: {
      width: 60,
      height: 60,
      alignSelf: "center",
      marginLeft: 10,
   },

   ReceitaPostada: {
      flexDirection: "row",
      backgroundColor: "#d3d3d3",
      borderRadius: 15,
      margin: 20,
      width: 370,
      alignSelf: "center",
      marginTop: 30,
      height: 90,
      shadowOffset:{  width: 5,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.5,     
      
   },

   TextPostada: {
      paddingLeft: 20,
      width: 280,
      alignSelf: "center",
   },
   
  
   
});

export default StylesMainPage;