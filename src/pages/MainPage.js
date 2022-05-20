import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { getRecipesIngredientV8, getRecipesById } from '../services/recipes-service';

import {insertLastSeen, getLastSeen, deleteLastSeen } from '../services/sqlite-service';





const MainPage = () => {
const twoinone = (t) => {
    setSearch(t);
    getSearchRecipes();
    console.log(t);
}

  const [search, setSearch] = useState('pesquisa');
  const [result, setResult] = useState([]);

  let Filter = 'ingredients';

  const getSearchRecipes = async () =>{
    getRecipesIngredientV8(
         Filter,
         search

    ).then(async response => {  
      if(response && response.success){
        console.log("Get favorite recipes by user id success");
        setResult(response.data);
      }else{
        console.log("Get favorite recipes by user id failed");
        console.log(response);
      }
    })
}

//#region putaria
const [lastSeenRecipeList, setlastSeenRecipeList] = useState([]);

let lastSeenList = [];
let lastSeenIds = [];

useEffect(() => {

  getLastSeen().then( (result) => {
    lastSeenList = result;
    lastSeenIds = lastSeenList.map((i) => {return i.recipeId});

    getRecipesLastList(lastSeenIds);
    console.log(lastSeenRecipeList);
  });

},[search]);

const getRecipesLastList =async (lastSeenIds) =>{
  getRecipesById(lastSeenIds).then(async response => {  
    if(response && response.success){
      if(lastSeenRecipeList.length < response.data.length)
        setlastSeenRecipeList(response.data);
    }else{
      console.log(response);
    }
  })
}

//#endregion

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={StylesMainPage.Pesquisar}>
        <TextInput placeholder='Pesquisar' 
        value={search}
        onChangeText={(t) => twoinone(t)}
        style={StylesMainPage.input}/>
        <Ionicons name='search' color={'#fff'} size={30} onPress={() => {}} 
        style={StylesMainPage.search}/>
      </View>
      
      {search != '' &&  <View>
        <View style={StylesMainPage.ultimo}>
        <Text>ÚLTIMOS VISTOS</Text>
        </View>
        <View style={StylesMainPage.mainmain}>
        <FlatList
          data={result}
          keyExtractor={(item)=>item.id}
          numColumns={1}
      
          renderItem={({item})=> {
            return(
              <TouchableOpacity onPress={()=>{insertLastSeen({recipeId: item.id})}}>   
                <Text numberOfLines={1} >{item.name}</Text>
                <Image style={StylesMainPage.testeImg} source={{uri:item.imageUrl}}/>
              </TouchableOpacity>
          );
      }}
    />
        </View>
      </View>}
      {search == '' && <ScrollView>
        <FlatList
          data={lastSeenRecipeList}
          keyExtractor={(item)=> item.id}
          numColumns={1}
          renderItem={({item})=> {
            return(
              <TouchableOpacity onPress={()=>{insertLastSeen({recipeId: item.id})}}>
                <View style={StylesMainPage.ReceitaPostada}>   
                  <Image style={StylesMainPage.ImagemPostada} source={{uri:item.imageUrl}}/>
                  <Text style={StylesMainPage.TextPostada} numberOfLines={1} >{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>}
    </BodyComponent>
    </>
  );
}

export default MainPage;
