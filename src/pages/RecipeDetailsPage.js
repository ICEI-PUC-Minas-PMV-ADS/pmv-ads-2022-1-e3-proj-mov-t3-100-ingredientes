import {Text, View, TouchableOpacity,Dimensions, Image, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import StylesRecipeDetailsPage from '../styles/StylesRecipeDetailsPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericButtonComponent from '../components/GenericButtonComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getRecipeById } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import {redirectUnauthenticatedToLogin} from '../services/auth-service';
import GenericGoBackComponent from '../components/GenericGoBackComponent';

const RecipeDetailsPage = ({route}) => {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState({
    name: 'Carregando...',
    ingredients: 'Carregando...',
    instrucions: 'Carregando...'
  });

  const getRecipe = async () =>{
    getRecipeById({
      recipeId: recipeId,
    }).then(async response => {  
      if(response && response.success){
        console.log(response.data[0]);

        setRecipe(response.data[0]);
      }else{
        console.log("Get recipe by id failed");
        console.log(response);
      }
    })
}

  useEffect(() => {
    getRecipe();


  }, [recipeId]);

  return (
   <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={{flex: 7}}>
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>{recipe.name}</Text>
          <Image style={{width: '60%', height: '60%', borderRadius: 7}} source={{uri:recipe.imgUrl}}/>
        </View>
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>Ingredientes 📋</Text>
          <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
            <Text style={StylesGeneric.LabelGeneric}>{recipe.ingredients}</Text>
          </ScrollView>
        </View>
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>Modo de Preparo 🍴</Text>
          <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
            <Text style={StylesGeneric.LabelGeneric}>{recipe.instrucions}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={StylesRecipeDetailsPage.BottomSection}>
        <GenericGoBackComponent/>
      </View>

    </BodyComponent>
    </>
  );
}

export default RecipeDetailsPage;