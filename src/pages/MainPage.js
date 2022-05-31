import { View, Text, TextInput, Image, FlatList, TouchableOpacity,CheckBox ,Dimensions } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { getRecipesIngredientV8, getRecipesById } from '../services/recipes-service';
import { allInitialsUpperCase } from '../utils/StringFormaterHelper';


import {insertLastSeen, getLastSeen, deleteLastSeen } from '../services/sqlite-service';

const screenWidth = Dimensions.get('window').width;
const columnsLast = Math.floor(screenWidth / 130);
const columnsSearch = Math.floor(screenWidth / 300);

const MainPage = () => {
const twoinone = (t) => {
    setSearch(t);
    if (isSelected == true){
      array = search.split(',');
      arrayOrder = array.sort();
      stringArrayOrder = arrayOrder.toString();
      console.log(stringArrayOrder);
    }
    else {
      stringArrayOrder = search;
      console.log(stringArrayOrder);
    }
    getSearchRecipes();
    console.log(t);
}

  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [isSelected, setSelection] = useState(false);

  let Filter = isSelected ? 'ingredients':'name';

  let array = [];
  let arrayOrder = [];
  let stringArrayOrder = '';


  const getSearchRecipes = async () =>{
    getRecipesIngredientV8(
         Filter,
         stringArrayOrder

    ).then(async response => {  
      if(response && response.success){
        console.log(stringArrayOrder);
        setResult(response.data);
      }else{
        console.log("Get favorite recipes by user id failed");
        console.log(response);
      }
    })
}

//#region sqlLite
const [lastSeenRecipeList, setlastSeenRecipeList] = useState([]);

let lastSeenList = [];
let lastSeenIds = [];

useEffect(() => {

  getLastSeen().then( (result) => {
    lastSeenList = result;
    lastSeenIds = lastSeenList.map((i) => {return i.recipeId});

    getRecipesLastList(lastSeenIds);
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
      <View style={StylesMainPage.checkboxContainer}>
      <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={StylesMainPage.checkbox}
          />
          <Text>Pesquisa por Ingredientes.</Text>     
      </View>

      {search != '' &&  <View>
        
        <FlatList style={StylesMainPage.Flat}
          data={result}
          keyExtractor={(item)=>item.id}
          numColumns={columnsSearch}
      
          renderItem={({item})=> {
            return(
              <TouchableOpacity style={StylesMainPage.ReceitaPostada}  onPress={()=>{insertLastSeen({recipeId: item.id})}}>   
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
        <FlatList style={StylesMainPage.Flat}
        
          data={lastSeenRecipeList}
          keyExtractor={(item)=> item.id}
          numColumns={columnsLast}
          renderItem={({item})=> {
            return(
              <TouchableOpacity style={StylesMainPage.ReceitaUT} onPress={()=>{insertLastSeen({recipeId: item.id})}}>
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
