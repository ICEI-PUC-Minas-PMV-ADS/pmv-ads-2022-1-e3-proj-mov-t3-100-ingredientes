import {Text, TextInput, View, TouchableOpacity,Dimensions, Image, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import StylesRecipeDetailsPage from '../styles/StylesRecipeDetailsPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericButtonComponent from '../components/GenericButtonComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getRecipeById, updateRecipe } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';
import {redirectUnauthenticatedToLogin} from '../services/auth-service';
import GenericGoBackComponent from '../components/GenericGoBackComponent';

const RecipeDetailsPage = ({route}) => {
  const { recipeId } = route.params;

  const [recipeName, setRecipeName] = useState('Carregando...');
  const [recipeImgUrl, setRecipeImgUrl] = useState('Carregando...');
  const [recipeIngredients, setRecipeIngredients] = useState('Carregando...');
  const [recipeInstructions, setRecipeInstructions] = useState('Carregando...');

  const [editing, setEditing] = useState(false);
  const [userIsOwner, setUserIsOwner] = useState(false);

  const getRecipe = async () =>{
    getRecipeById({
      recipeId: recipeId,
    }).then(async response => {  
      if(response && response.success){
        setRecipeImgUrl(response.data[0].imgUrl);
        setRecipeInstructions(response.data[0].instructions);
        setRecipeName(response.data[0].name);
        setRecipeIngredients(response.data[0].ingredients);
      }else{
        console.log("Get recipe by id failed");
        console.log(response);
      }
    })
}

const handleUpdate = () => {
  updateRecipe({
    id: recipeId,
    name: recipeName,
    imgUrl: recipeImgUrl,
    ingredients: recipeIngredients,
    instructions: recipeInstructions
  }).then( response => {
    if(response && response.success){
      console.log("Update recipe success");

      setEditing(!editing);
    }else{
      console.log("Update recipe failed");
      console.log(response);
    }
  })
}

  useEffect(() => {
    getRecipe();
  }, [recipeId, editing]);

  return (
   <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={{flex: 7}}>
        <View style={StylesRecipeDetailsPage.ContentSection}>
          {!editing && <Text style={StylesGeneric.GenericTitle}>{recipeName}</Text>}
          {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaOneLine}
              defaultValue={recipeName}
              multiline={false}
              textAlignVertical={'top'}
              autoCorrect={true}
              onChangeText={(text) => setRecipeName(text)}
            />}
          {!editing && <Image style={StylesRecipeDetailsPage.Image} source={{uri:recipeImgUrl}}/>}
          {editing && <Image style={StylesRecipeDetailsPage.ImageEditing} source={{uri:recipeImgUrl}}/>}
          {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaOneLine}
              defaultValue={recipeImgUrl}
              multiline={false}
              textAlignVertical={'top'}
              autoCorrect={true}
              onChangeText={(text) => setRecipeImgUrl(text)}
            />}
        </View>
        <View style = {StylesGeneric.LineGeneric} />
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>Ingredientes 📋</Text>
          <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
            {!editing && <Text style={StylesGeneric.LabelGeneric}>{recipeIngredients}</Text>}
            {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaContent}
              defaultValue={recipeIngredients}
              multiline={true}
              textAlignVertical={'top'}
              autoCorrect={true}
              onChangeText={(text) => setRecipeIngredients(text)}
            />}
          </ScrollView>
        </View>
        <View style = {StylesGeneric.LineGeneric} />
        <View style={StylesRecipeDetailsPage.ContentSection}>
          <Text style={StylesGeneric.GenericTitle}>Modo de Preparo 🍴</Text>
          <ScrollView style={StylesRecipeDetailsPage.ScrollViewText}>
            {!editing && <Text style={StylesGeneric.LabelGeneric}>{recipeInstructions}</Text>}
            {editing && <TextInput style={StylesRecipeDetailsPage.InputAreaContent}
              defaultValue={recipeInstructions}
              multiline={true}
              textAlignVertical={'top'}
              autoCorrect={true}
              onChangeText={(text) => setRecipeInstructions(text)}
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