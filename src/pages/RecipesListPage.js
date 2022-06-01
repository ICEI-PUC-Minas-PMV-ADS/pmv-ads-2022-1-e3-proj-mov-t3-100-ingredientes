import { Text, TextInput, View, Image} from 'react-native';
import {useState, useEffect} from 'react';
import StylesRecipesListPage from '../styles/StylesRecipesListPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericGoBackComponent from '../components/GenericGoBackComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getOwnRecipesByUserId, getFavoriteRecipesByUserId } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import {redirectUnauthenticatedToLogin} from '../services/auth-service'

import StylesMainPage from '../styles/StylesMainPage';
import { Ionicons } from '@expo/vector-icons';
import {ScrollView} from 'react-native';

const RecipesList = ({route}) => {
    redirectUnauthenticatedToLogin();
    const navigation = useNavigation();

    const {userId} = useUser();
    const {type} = route.params;

    const [ownRecipes, setOwnRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const [search, setSearch] = useState('');

    const getOwnRecipes = async () =>{
        getOwnRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            setOwnRecipes(response.data);
            console.log(response.data);
          }else{
            console.log("Get own recipes by user id failed");
            console.log(response);
          }
        })
    }
    
    const getFavoriteRecipes = async () =>{
        getFavoriteRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            setFavoriteRecipes(response.data);
          }else{
            console.log("Get favorite recipes by user id failed");
            console.log(response);
          }
        })
    }

    const mostrar = (search) => {
      console.log(search)
      console.log(ownRecipes);

      // Está perconrrendo e transformando o obj do Json server em um Array do js
      let arr = ownRecipes.map(function(obj){
        return Object.keys(obj).map(function(key){
          return obj[key];
        });
      });

      let i;
      for(i = 0; i< ownRecipes.length; i++){
        console.log(arr[i].slice(0, 1)); // Serve para buscar apenas o primeiro elemento do vetor, ou seja o name;
      }
    }

    useEffect(() => {
      getOwnRecipes();
      getFavoriteRecipes();
    }, []);
    
  return (
   <>
    <HeaderComponent></HeaderComponent> 
    <BodyComponent>
   <View style={StylesRecipesListPage.Screen}> 
        <View style={StylesRecipesListPage.SectionRecipeList}>

          <View style={StylesMainPage.Pesquisar}>
              <TextInput placeholder='Pesquisar' 
              onChangeText={(search) => mostrar(search)}
              style={StylesMainPage.input}/>
              <Ionicons name='search' color={'#fff'} size={30} onPress={() => {}} 
              style={StylesMainPage.search}/>
          </View>
        {search == '' &&  <View>

        <View style={StylesMainPage.mainmain}>

          <Text style={StylesRecipesListPage.Title}>{type == 'own' ? 'Minhas Receitas 📔' : 'Receitas Favoritas ❤️'}</Text>
          <View style={StylesMainPage.imagemmain1}>
            <View>
                <RecipeListComponent data={type == 'own' ? ownRecipes : favoriteRecipes}></RecipeListComponent>
     
            </View>
          </View>
        </View>
      </View>}
      {search != '' && <ScrollView>
        <View style={StylesMainPage.ReceitaPostada}>
          <Image style={StylesMainPage.ImagemPostada} onPress={() => {}} source={require('../assets/images/receita6.png')}/>
          <Text style={StylesMainPage.TextPostada}>PIZZA DOCE: Quentinhas, saborosas e com recheios tão diferentes, as pizzas doces deixam qualquer um com água na boca.</Text>
        </View>
        <View style={StylesMainPage.ReceitaPostada}>
          <Image style={StylesMainPage.ImagemPostada} onPress={() => {}} source={require('../assets/images/receita6.png')}/>
          <Text style={StylesMainPage.TextPostada}>PIZZA DOCE: Quentinhas, saborosas e com recheios tão diferentes, as pizzas doces deixam qualquer um com água na boca.</Text>
        </View>
        <View style={StylesMainPage.ReceitaPostada}>
          <Image style={StylesMainPage.ImagemPostada} onPress={() => {}} source={require('../assets/images/receita6.png')}/>
          <Text style={StylesMainPage.TextPostada}>PIZZA DOCE: Quentinhas, saborosas e com recheios tão diferentes, as pizzas doces deixam qualquer um com água na boca.</Text>
        </View>
        <View style={StylesMainPage.ReceitaPostada}>
          <Image style={StylesMainPage.ImagemPostada} onPress={() => {}} source={require('../assets/images/receita6.png')}/>
          <Text style={StylesMainPage.TextPostada}>PIZZA DOCE: Quentinhas, saborosas e com recheios tão diferentes, as pizzas doces deixam qualquer um com água na boca.</Text>
        </View>
      </ScrollView>}


            
        </View>
        <View style={StylesRecipesListPage.SectionBottom}>           
            <GenericGoBackComponent/>
        </View>
     </View>
    </BodyComponent>
    </>
  );
}

export default RecipesList;