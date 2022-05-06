import { Text, View} from 'react-native';
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

const RecipesList = ({route}) => {
    redirectUnauthenticatedToLogin();
    const navigation = useNavigation();

    const {userId} = useUser();
    const {type} = route.params;

    const [ownRecipes, setOwnRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const getOwnRecipes = async () =>{
        getOwnRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            console.log("Get own recipes by user id success");
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
            console.log("Get favorite recipes by user id success");
            setFavoriteRecipes(response.data);
          }else{
            console.log("Get favorite recipes by user id failed");
            console.log(response);
          }
        })
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
            <Text style={StylesRecipesListPage.Title}>{type == 'own' ? 'Minhas Receitas' : 'Receitas Favoritas'}</Text>
            <View>
                <RecipeListComponent data={type == 'own' ? ownRecipes : favoriteRecipes}></RecipeListComponent>          
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