import { View, Text, TextInput,TouchableOpacity,Image, KeyboardAvoidingView} from 'react-native';
import HeaderComponent from './../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { PostRecipes } from '../services/recipes-service';
import { useState } from 'react';
import StylesPostRecipePage from '../styles/StylesPostRecipePage';
import StylesGeneric from '../styles/StylesGeneric';
import { useUser } from './../contexts/UserContext';

const PostRecipePage = () => {
  const {userId} = useUser();

  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instrucions, setInstrucions] = useState('');

  let array = [];
  let arrayOrder = [];

  const [trueFeedBack, setTrueFeedBack] = useState(false);
  const [falseFeedBack, setFalseFeedBack] = useState(false);

  const handlePostRecipes = () => {
    array = ingredients.split(" ").join("");
    console.log(userId);
    array = array.split(',');
    arrayOrder = array.sort();

    if(imgUrl != '' && title != '' && ingredients != '' && instrucions != ''){
      PostRecipes({
        imgUrl: imgUrl,
        name: title,
        ingredients: arrayOrder,
        instructions: instrucions,
        createdByUserId: userId,
        favoritedByUserIdList: []

      }).then( response => {
        if(response && response.success){
          setTrueFeedBack(true);
        }else{
          console.log(response);
          console.warn('Erro ao criar nova receita');
        }
      })
    }
    else
      console.log("Errado");
      setFalseFeedBack(true);
  }
  return (
  <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <View style={{flex: 3, alignItems:'center' }}>
          <Text style={StylesGeneric.GenericTitle}>PUBLIQUE SUA RECEITA</Text>
          {imgUrl != '' && <Image style={StylesPostRecipePage.logo} source={{uri:imgUrl}}/>}
          {imgUrl == '' && <Image style={StylesPostRecipePage.logo} source={require('../assets/images/Ramen.png')}/>}
        </View>
        <View style={{flex: 7}}>
          <TextInput
          style={StylesPostRecipePage.inputImgUrl}
          placeholder="URL da imagem"
          autoCorrect={true}
          onChangeText={(text) => setImgUrl(text)}
          />
        
          <View>
            <Text style={StylesPostRecipePage.Label}>Título da Receita</Text>
            <TextInput
              style={StylesPostRecipePage.inputArea}
              placeholder ="Bolo de morango" 
              autoCorrect={true}
              onChangeText={(text) => setTitle(text)}
            />
          </View>  
          <View>
            <Text style={StylesPostRecipePage.Label}>Ingredientes</Text>  
            <TextInput
              style={StylesPostRecipePage.inputArea}
              placeholder="Banana, farinha de tringo, ovos ..."
              autoCorrect={true}
              onChangeText={(text) => setIngredients(text)}
            />
          </View>
          <View>  
            <Text style={StylesPostRecipePage.Label}>Modo de Preparo</Text>
            <TextInput
              style={StylesPostRecipePage.inputArea}
              placeholder="Misture tudo e coloque no forno..."
              autoCorrect={true}
              onChangeText={(text) => setInstrucions(text)}
            />
          </View>
          <View>
            <Text style={StylesGeneric.LabelGenericBlack}>{ trueFeedBack ? 'A Receita foi enviada com sucesso!!!' : null }</Text>
            <Text style={StylesGeneric.LabelGenericBlack}>{ falseFeedBack ? 'Possui algum local em branco, favor verificar' : null }</Text>
          </View>
        </View> 
        <View style={{flex: 1}}>
          <TouchableOpacity style={StylesPostRecipePage.PostRecipeLink} onPress={()=> handlePostRecipes()} > 
            <Text style={StylesGeneric.LinkGeneric}>Publicar Receita</Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>

    </BodyComponent>
  </>
  );
}

export default PostRecipePage;
