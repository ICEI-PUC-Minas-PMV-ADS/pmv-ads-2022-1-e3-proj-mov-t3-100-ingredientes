import { View, Text, TextInput, Image } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const MainPage = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={StylesMainPage.Pesquisar}>
      <TextInput placeholder='Pesquisar' 
      style={StylesMainPage.input}/>
      <Ionicons name='search' color={'#fff'} size={30} onPress={() => {}} 
      style={StylesMainPage.search}
      />
      </View>
      <View style={StylesMainPage.ultimo}>
      <Text style={StylesMainPage.Textouv}>ÚLTIMOS VISTOS</Text>
      </View>
      <View style={StylesMainPage.imagemp}>
        <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receitaum.png')}/>
        <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita2.png')}/>
        <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita3.png')}/>

      </View>
      <View style={StylesMainPage.textovi}>
        <Text style={StylesMainPage.Textode}>Frango Empanado</Text>
        <Text style={StylesMainPage.Textode}>Porção de Batata</Text>
        <Text style={StylesMainPage.Textode}>Refeição Mineira</Text>
      </View>
    </BodyComponent>
    </>
  );
}

export default MainPage;
