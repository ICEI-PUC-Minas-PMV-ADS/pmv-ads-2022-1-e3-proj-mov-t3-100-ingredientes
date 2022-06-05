import { Text, TextInput, View, Image} from 'react-native';
import {useState, useEffect} from 'react';
import StylesRecipesListPage from '../styles/StylesRecipesListPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import GenericGoBackComponent from '../components/GenericGoBackComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getOwnRecipesByUserId, getFavoriteRecipesByUserId } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import StylesMainPage from '../styles/StylesMainPage';
import { Ionicons } from '@expo/vector-icons';

const RecipesList = ({route}) => {

  const [filteredList, setFilteredList] = useState([]);
  const {userId} = useUser();
  const {type} = route.params;

  const [ownRecipes, setOwnRecipes] = useState([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getOwnRecipes = async () =>{
    getOwnRecipesByUserId({
      userId: userId,
    }).then(async response => {  
      if(response && response.success){
        setOwnRecipes(response.data);
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

  const showFilteredResult = (search) => {
    let resultList = [];

    if(type == 'own')
      resultList = ownRecipes.filter(item => item.name.includes(search));
    if(type != 'own')
      resultList = favoriteRecipes.filter(item => item.name.includes(search));

    if(search.length != 0)
      setFilteredList(resultList);
    else setFilteredList([]);
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
            <TextInput placeholder='Filtrar'
              onChangeText={(search) => showFilteredResult(search)}
              style={StylesMainPage.input}/>
          </View>
            <Text style={StylesRecipesListPage.Title}>{type == 'own' ? 'Minhas Receitas 📔' : 'Receitas Favoritas ❤️'}</Text>
            <View>
              {type == 'own' && <RecipeListComponent data={filteredList.length != 0 ? filteredList : ownRecipes}></RecipeListComponent>}
              {type != 'own' && <RecipeListComponent data={filteredList.length != 0 ? filteredList : favoriteRecipes}></RecipeListComponent>}
            </View>
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