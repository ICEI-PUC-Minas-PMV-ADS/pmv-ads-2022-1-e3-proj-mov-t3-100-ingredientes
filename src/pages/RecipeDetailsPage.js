import {Text, TextInput, View, TouchableOpacity,Dimensions, Image, ScrollView} from 'react-native';
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

  const [editing, setEditing] = useState(false);
  const [userIsOwner, setUserIsOwner] = useState(false);

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
          <Image style={StylesRecipeDetailsPage.Image} source={{uri:recipe.imgUrl}}/>
        </View>
        <View style = {StylesGeneric.LineGeneric} />
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>Ingredientes 📋</Text>
          <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
            {!editing && <Text style={StylesGeneric.LabelGeneric}>{recipe.ingredients}</Text>}
            {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaContent}
              defaultValue={recipe.instructions}
              multiline={true}
              textAlignVertical={'top'}
              autoCorrect={true}
            />}
          </ScrollView>
        </View>
        <View style = {StylesGeneric.LineGeneric} />
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>Modo de Preparo 🍴</Text>
          <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
            {!editing && <Text style={StylesGeneric.LabelGeneric}>{recipe.instructions}</Text>}
            {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaContent}
              defaultValue={recipe.instructions}
              multiline={true}
              textAlignVertical={'top'}
              autoCorrect={true}
            />}
          </ScrollView>
        </View>
      </View>
      <View style={StylesRecipeDetailsPage.BottomSection}>
        <View style={{flex: 1}}>
          <GenericGoBackComponent/>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'row', marginRight: 20}}>
            {!editing && <TouchableOpacity style={StylesGeneric.GenericButtonGray} onPress={() => setEditing(!editing)}>
              <Text style={StylesGeneric.GenericWhiteButtonText}>Editar</Text>
            </TouchableOpacity>}
            {editing && <TouchableOpacity style={StylesGeneric.GenericButtonGray} onPress={() => setEditing(!editing)}>
              <Text style={StylesGeneric.GenericWhiteButtonText}>Cancelar</Text>
            </TouchableOpacity>}
            {editing && <TouchableOpacity style={StylesGeneric.GenericButtonOrange} onPress={() => handleUpdate()}>
              <Text style={StylesGeneric.GenericWhiteButtonText}>Salvar</Text>
            </TouchableOpacity>}
          </View>
        </View>
      </View>

    </BodyComponent>
    </>
  );
}

export default RecipeDetailsPage;