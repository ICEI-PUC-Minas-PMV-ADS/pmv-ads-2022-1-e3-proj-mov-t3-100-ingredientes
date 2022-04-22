import React from 'react';
import { useState, useEffect } from 'react';
import {SafeAreaView,View,TextInput,FlatList,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../components/ListItem';

import results from '../data/ListaDeReceitas';
import StylesMyListRecipe from '../styles/StylesMyListRecipe';



const MyListRecipe = () => {
    
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState(results);

  useEffect(() => {
    if (searchText === '') {
      setList(results);
    } else {
      setList(
        results.filter(
          (item) =>
            item.Nome.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  const handleOrderClick = () => {
    let newList = [...results];

    newList.sort((a, b) => (a.Nome > b.Nome ? 1 : b.Nome > a.Nome ? -1 : 0));

    setList(newList);
  };

  return (
  <>   
    <SafeAreaView style={StylesMyListRecipe.container}>
      <View style={StylesMyListRecipe.searchArea}>
        <TextInput
          style={StylesMyListRecipe.input}
          placeholder="Pesquise uma Receita"
          placeholderTextColor="#fff"
          value={searchText}
          onChangeText={(t) => setSearchText(t)}
        />
        <TouchableOpacity onPress={handleOrderClick} style={StylesMyListRecipe.orderButton}>
          <MaterialCommunityIcons
            Nome="order-alphabetical-ascending"
            size={32}
            color="red"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        style={StylesMyListRecipe.list}
        renderItem={({ item }) => <ListItem data={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar />
      </SafeAreaView>
</>);
};

export default MyListRecipe;