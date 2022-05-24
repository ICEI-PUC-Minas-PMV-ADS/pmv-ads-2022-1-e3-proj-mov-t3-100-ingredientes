import {Text, View, TouchableOpacity,Dimensions, Image, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
//import StylesRecipeDetailsPage from '../styles/StylesRecipeDetailsPage';
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
  const [recipe, setRecipe] = useState({});

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
      <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center'}}>
        <Text style={StylesGeneric.GenericTitle}>Bolo de banana</Text>
        <Image style={{width: '60%', height: '60%', borderRadius: 7}} source={{uri:recipe.imgUrl}}/>
      </View>
        <View style={{flex: 1, backgroundColor: 'red', alignItems: 'center'}}>
          <Text style={StylesGeneric.GenericTitle}>Ingredientes 📋</Text>
          <ScrollView style={{flex: 1, marginHorizontal: 20, marginBottom: 20}}>
            <Text style={StylesGeneric.LabelGeneric}>{recipe.ingredients}</Text>
          </ScrollView>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center'}}>
          <Text style={StylesGeneric.GenericTitle}>Modo de Preparo 🍴</Text>
          <ScrollView style={{flex: 1, marginHorizontal: 20, marginBottom: 20}}>
            <Text style={StylesGeneric.LabelGeneric}>{recipe.instrucions}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'purple'}}>
        <GenericGoBackComponent/>
      </View>

    </BodyComponent>
    </>
  );
}

export default RecipeDetailsPage;