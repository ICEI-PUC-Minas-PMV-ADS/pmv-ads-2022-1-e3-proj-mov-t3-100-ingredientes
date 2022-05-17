import { View, Text, TextInput, Image } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {ScrollView} from 'react-native';

const MainPage = () => {

  const [search, setSearch] = useState('');

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={StylesMainPage.Pesquisar}>
        <TextInput placeholder='Pesquisar' 
        onChangeText={(text) => setSearch(text)}
        style={StylesMainPage.input}/>
        <Ionicons name='search' color={'#fff'} size={30} onPress={() => {}} 
        style={StylesMainPage.search}/>
      </View>
      {search == '' &&  <View>
        <View style={StylesMainPage.ultimo}>
        <Text>ÚLTIMOS VISTOS</Text>
        </View>
        <View style={StylesMainPage.mainmain}>
          <View style={StylesMainPage.imagemmain1}>
            <View style={StylesMainPage.imagemp}>
              <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receitaum.png')}/>
            </View> 
            <View style={StylesMainPage.imagemp}>
              <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita2.png')}/>
            </View>
            <View style={StylesMainPage.imagemp}>
              <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita3.png')}/>
            </View>
          </View>
          <View style={StylesMainPage.imagemmain2}>
            <View style={StylesMainPage.imagemp}>
              <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita4.png')}/>
            </View> 
            <View style={StylesMainPage.imagemp}>
              <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita5.png')}/>
            </View>
            <View style={StylesMainPage.imagemp}>
              <Image style={StylesMainPage.imagema} onPress={() => {}} source={require('../assets/images/receita6.png')}/>
            </View>
          </View>
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
