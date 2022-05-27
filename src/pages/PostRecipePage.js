import { View, Text, TextInput,TouchableOpacity,Image, StyleSheet,KeyboardAvoidingView} from 'react-native';
import HeaderComponent from './../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { PostRecipes } from '../services/recipes-service';
import { useState } from 'react';
import StylesLoginPage from '../styles/StylesLoginPage';


const PostRecipePage = () => {

  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instrucions, setInstrucions] = useState('');

  const [trueFeedBack, setTrueFeedBack] = useState(false);
  const [falseFeedBack, setFalseFeedBack] = useState(false);

  const handlePostRecipes = () => {

    if(imgUrl != '' && title != '' && ingredients != '' && instrucions != ''){
      PostRecipes({
        imgUrl: imgUrl,
        name: title,
        ingredients: ingredients,
        instrucions: instrucions

      }).then( response => {

        if(response && response.success){
          console.log('Recipes success');
          console.log(response);
          console.warn('Receita registrada com Sucesso');
          setTrueFeedBack(true);

        }else{
          console.log('Recipes failed');
          console.log(response);
          console.warn('Erro ao criar nova receita');
        }
      })
    }
    else{
      console.log("Errado");
      setFalseFeedBack(true);
    }
  }
  return (
  <>
    <HeaderComponent></HeaderComponent>
  <BodyComponent>
  <KeyboardAvoidingView style={estilo.Screen} behavior="padding">
      <Text style={estilo.texto}>PUBLIQUE SUA RECEITA</Text>
      <View style={{flex:30,alignItems:'center' }}>
        <Text style={estilo.texto}>PHOTO</Text>
        {imgUrl != '' && <Image style={estilo.logo} source={{uri:imgUrl}}/>}
        {imgUrl == '' && <Image style={estilo.logo} source={require('../assets/images/Ramen.png')}/>}
      </View>
      <View style={{flex:70}}>
        <TextInput
        style={estilo.url}
        placeholder="imagem por url"
        autoCorrect={true}
        onChangeText={(text) => setImgUrl(text)}
        />
        <View>
          <Text style={estilo.texto}>TITULO DA RECEITA</Text>
          <TextInput
            style={estilo.inputArea}
            placeholder ="Titulo da Receita..." 
            autoCorrect={true}
            onChangeText={(text) => setTitle(text)}
          />
        </View>  
        <View>
          <Text style={estilo.texto}>INGREDIENTES</Text>  
          <TextInput
            style={estilo.inputArea}
            placeholder="banana, farinha de tringo, ovos ..."
            autoCorrect={true}
            onChangeText={(text) => setIngredients(text)}
          />
        </View>
        <View>  
          <Text style={estilo.texto}>MODO DE PREPARO</Text>
          <TextInput
            style={estilo.inputArea}
            placeholder="Misture tudo e coloque no forno..."
            autoCorrect={true}
            onChangeText={(text) => setInstrucions(text)}
          />
        </View>
        <View>
          <Text style={estilo.texto}>{ trueFeedBack ? 'A Receita foi enviada com sucesso!!!' : null }</Text>
          <Text style={estilo.texto}>{ falseFeedBack ? 'Possui algum local em branco, favor verificar' : null }</Text>
        </View>
        <TouchableOpacity style={estilo.CreateAccount} onPress={()=> handlePostRecipes()} > 
          <Text style={estilo.LinkGeneric}>Publicar Receita</Text>
        </TouchableOpacity>
      </View> 
    </KeyboardAvoidingView>

  </BodyComponent>
  </>
  );
}
const estilo = StyleSheet.create({
  logo:{
      flex:1, 
      width:175, 
      height:150,
      borderRadius: 7,
      overflow: 'hidden',
      borderWidth: 1,
      resizeMode: 'cover',
      shadowOffset: {
        width: 0,
        height: 3,
      },
       shadowOpacity: 0.40,
      shadowRadius: 4.84,
      shadowColor: "#000",
      marginTop:2,

      
  },
  ImageSection: {
    flex:1,
    backgroundColor:'#000',
 },
 inputArea: {
  width: '90%',
  height: 70,
  alignItems: 'center',
  alignSelf: 'center',
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
button:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: '50%',
    borderRadius:7,
    alignSelf: 'center',
 },
texto:{
fontFamily:'',
margin: 15,
textAlign: 'center',
},
Screen: {
  flex: 1,
  backgroundColor: '#fff7',
},
url: {
  width: '90%',
  height: 40,
  alignItems: 'center',
  alignSelf: 'center',
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
  marginTop: 10
},
LinkGeneric: {
  fontSize: 20,
  color: '#E05D25',
  fontWeight: '700',
  marginTop:20
},
CreateAccount:{
  flexDirection: 'row',
  alignSelf: 'center'
}
})
export default PostRecipePage;
