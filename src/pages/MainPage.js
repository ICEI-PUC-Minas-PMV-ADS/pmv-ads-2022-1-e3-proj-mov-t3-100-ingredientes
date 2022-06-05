import { View, Text, TextInput, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useState, useEffect } from 'react';
import { getRecipesIngredientV8, getRecipesById } from '../services/recipes-service';
import { allInitialsUpperCase } from '../utils/StringFormaterHelper';
import {insertLastSeen, getLastSeen, deleteLastSeen } from '../services/sqlite-service';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const screenWidth = Dimensions.get('window').width;
const columnsLast = Math.floor(screenWidth / 130);
const columnsSearch = Math.floor(screenWidth / 300);

import { useNavigation } from '@react-navigation/native';

const MainPage = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [ingredientsSearch, setIngredientsSearch] = useState(false);

  let filterType = ingredientsSearch ? 'ingredients':'name';

  let array = [];
  let arrayOrder = [];
  let stringArrayOrder = '';

  const searchRecipes = (text) => {
    setSearch(text);

    if (ingredientsSearch == true){
      array = search.split(" ").join("");
      array = array.split(',');

      arrayOrder = array.sort();

      stringArrayOrder = arrayOrder.toString(); 
      stringArrayOrder = stringArrayOrder += " ";
    }
    else {
      stringArrayOrder = search;
    }

    getSearchRecipes();
  }

  const getSearchRecipes = async () =>{
    getRecipesIngredientV8(
      filterType,
      stringArrayOrder
    ).then(async response => {  
      if(response && response.success){
        setResult(response.data);

      }else{
        console.log("Get favorite recipes by user id failed");
        console.log(response);
      }
    })
  }

const [lastSeenRecipeList, setlastSeenRecipeList] = useState([]);
let lastSeenList = [];
let lastSeenIds = [];

useEffect(() => {
  getLastSeen().then( (result) => {
    lastSeenList = result;
    lastSeenIds = lastSeenList.map((i) => {return i.recipeId});

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    
    //ordenando pelos mais recentes
    lastSeenIds.sort(function(a, b) {
      return b - a;
    });

    //pegando ids que vão ser deletados da tabela de ultimos vistos (lastSeen)
    let uniqueRecipeIdList = lastSeenIds.filter(onlyUnique).slice(0,(columnsLast*2));
    let indexUniqueRecipeIdList = [];
    let lastSeenIdListToDelete = []

    uniqueRecipeIdList.forEach((item) => {
      indexUniqueRecipeIdList.push(lastSeenIds.indexOf(item));
    })

    for(let i = 0; i < lastSeenIds.length; i++){
      if(indexUniqueRecipeIdList.filter((index) => {return index == i}).length == 0)
      lastSeenIdListToDelete.push(lastSeenList[i].id);
    }

    //deletando ultimos vistos repetidos
    deleteLastSeen(lastSeenIdListToDelete);

    getRecipesLastList(lastSeenIds);
  });
},[search]);

const getRecipesLastList = async (lastSeenIds) => {
  getRecipesById(lastSeenIds).then(async response => {  
    if(response && response.success){
      if(lastSeenRecipeList.length < response.data.length)
        setlastSeenRecipeList(response.data);
    }else{
      console.log(response);
    }
  })
}

const goToRecipeDetails = (recipeId) => {
  insertLastSeen({recipeId: recipeId});
  navigation.navigate('RecipeDetailsPage', {recipeId: recipeId})
} 

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={StylesGeneric.GenericSearchInputRegion}>
        <TextInput placeholder='Pesquisar' 
        value={search}
        onChangeText={(text) => searchRecipes(text)}
        style={StylesGeneric.GenericSearchInput}/>
      </View>

      <View style={StylesMainPage.CheckboxContainer}>
        <BouncyCheckbox onPress={() => {setIngredientsSearch(!ingredientsSearch)}} textStyle={{textDecorationLine: "none", color: 'black'}} isChecked={ingredientsSearch} text="Pesquisa por Ingredientes"/>
      </View>

      {search != '' &&  <View>
        <FlatList style={{alignSelf: 'center', width: '100%'}}
          data={result}
          keyExtractor={(item)=>item.id}
          numColumns={columnsSearch}
          renderItem={({item})=> {
            return(
              <TouchableOpacity style={StylesMainPage.ReceitaPostada}  onPress={()=>{goToRecipeDetails(item.id)}}>   
                <Image style={StylesMainPage.ImagemPostada} source={{uri:item.imgUrl}}/>
                <Text style={StylesMainPage.testeT} numberOfLines={1} >{allInitialsUpperCase(item.name)}</Text>
              </TouchableOpacity>
            );
          }}
        />
        </View>
      }
      {search == '' && <View>
      <Text style={StylesMainPage.UltimoV} >ÚLTIMOS VISTOS</Text>
        <FlatList style={{alignSelf: 'center'}}
        
          data={lastSeenRecipeList}
          keyExtractor={(item)=> item.id}
          numColumns={columnsLast}
          renderItem={({item})=> {
            return(
              <TouchableOpacity style={StylesMainPage.ReceitaUT} onPress={() => {goToRecipeDetails(item.id)}}>
                <View>
                  <Image style={StylesMainPage.ImagemPostada} source={{uri:item.imgUrl}}/>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>}
    </BodyComponent>
    </>
  );
}

export default MainPage;
