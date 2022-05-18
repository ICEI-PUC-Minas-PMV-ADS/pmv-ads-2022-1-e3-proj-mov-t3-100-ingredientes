import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import { getRecipesIngredientV8 } from '../services/recipes-service';




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
          numColumns={3}
      
          renderItem={({item})=> {
            return(
              <TouchableOpacity >   
                <Text numberOfLines={1} >{item.name}</Text>
                <Image style={StylesMainPage.testeImg} source={{uri:item.imageUrl}}/>
              </TouchableOpacity>
          );
      }}
    />
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
     
      
    </BodyComponent>
    </>
  );
}

export default MainPage;
