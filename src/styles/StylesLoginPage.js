import { StyleSheet } from 'react-native';

const StylesLoginPage = StyleSheet.create({
 Tela: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#5555',

 },
   GridButon:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'90%'

},
   Imagem:{
   flex:1, 
   alignItems: 'center',
},
   Interface:{
      backgroundColor:'#fff',
      width:'90%',
      marginBottom:10,
      color:'#222',
      fontSize:17,
      borderRadius:7,
      padding:10
},
   Botao:{
      backgroundColor: '#ff9930',
      width:'90%',
      alignItems:'center',
      justifyContent:'center',
      height:45,
      borderRadius:7

   },
   TextoBotao:{
      color:'#fff',
      fontSize:18
      
   },
   BotaoRegistrar:{
      marginTop:10,
   },
   TextoRegistrar:{
      color:'#fff',
      fontSize:18
   }
});

export default StylesLoginPage;