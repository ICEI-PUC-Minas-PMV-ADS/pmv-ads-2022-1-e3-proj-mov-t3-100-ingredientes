import { StyleSheet } from 'react-native';

const StylesMainPage = StyleSheet.create({
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
  
   ReceitaUT: {
      flexDirection: "row",
      backgroundColor: "#f7a156",
      borderRadius: 7,
      margin: 10,
      width: 100,
      alignItems: "center",
      alignSelf: "center",
      height: 90,
      shadowOffset:{  width: 5,  height: 5,  },
      shadowColor: 'black',
      shadowOpacity: 0.5,   
   },
 
  UltimoV:{
   fontSize: 13,
   color: '#00000080',
   alignSelf: "center",
   marginTop: 10,
  },
  
   ImagemPostada: {
      width: 80,
      height: 70,
      alignSelf: "center",
      marginLeft: 10,
      borderRadius: 10
   },

   ReceitaPostada: {
      flexDirection: "row",
      backgroundColor: "#f7a156",
      borderRadius: 15,
      margin: 5,
      width: '85%',
      alignSelf: "center",
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
   
   testeImg: { 
      width: 80,
      height: 75,
      borderRadius:7,
      marginTop: 6,
      marginRight: 20,
    
   },

   testeT: {
      color: "#FFFF",
      fontWeight: '500',
      marginLeft: 9,
      marginTop: 5,
   },

   CheckboxContainer: {
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: 10,
      marginTop:17
    }
});

export default StylesMainPage;