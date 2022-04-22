import { StyleSheet } from 'react-native';

const StylesMyAccount = StyleSheet.create({
 Tela: {
    flex:1,
    alignItems:'center',
    backgroundColor: '#fff',
 },
 TextoItem:{
    color:'#000',
    fontSize:18,
    borderBottomWidth: 1,
    flexBasis: 0
 },
ImagemItem:{
   flexBasis: 0,
   width:70,
   height:70
},
GridPadrao:{
   alignItems: "center",
   flexGrow: 1,
   margin: 4,
   padding: 20
},
Botao:{
   backgroundColor: '#ff9930',
   width:'50%',
   alignItems:'center',
   justifyContent:'center',
   height:45,
   borderRadius:7

},
TextoBotao:{
   color:'#fff',
   fontSize:18 
},
Texto:{
   fontSize:20,
   padding: 2,
}
});

export default StylesMyAccount;