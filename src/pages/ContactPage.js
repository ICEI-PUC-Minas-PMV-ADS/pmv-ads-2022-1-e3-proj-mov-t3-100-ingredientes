import { useEffect, useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity,Text,Linking,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import StylesLoginPage from '../styles/StylesLoginPage';
import { Ionicons } from '@expo/vector-icons';
import StylesContactPage from '../styles/StylesContactPage';
import { login } from '../services/auth-service';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import { insertLoginOptions, getLoginOptions, updateLoginOptions } from '../services/sqlite-service';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import GenericGoBackComponent from '../components/GenericGoBackComponent';

const ContactPage = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={{flex: 14}}>

      <View style={StylesContactPage.PersonSection}>
        <View>
          <Text style={{fontSize: 15}}>Felipe Bohm Mitre</Text>
        </View>
        <View style={StylesContactPage.LinksSection}>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://www.linkedin.com/in/felipe-bohm-mitre-268b171a2/')}}>
            <Ionicons name={'logo-linkedin'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://github.com/lipebohmmitre/')}}>
            <Ionicons name={'logo-github'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('mailto:felipe.mitre16@gmail.com')}}>
            <Ionicons name={'mail'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={StylesContactPage.PersonSection}>
        <View>
          <Text style={{fontSize: 15}}>Gabriel Ilídio</Text>
        </View>
        <View style={StylesContactPage.LinksSection}>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://www.linkedin.com/in/gabriel-il%C3%ADdio-8aa54b86/')}}>
            <Ionicons name={'logo-linkedin'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://github.com/gilidio8')}}>
            <Ionicons name={'logo-github'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('mailto:gilidio8@gmail.com')}}>
            <Ionicons name={'mail'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={StylesContactPage.PersonSection}>
        <View>
          <Text style={{fontSize: 15}}>Iago Iann</Text>
        </View>
        <View style={StylesContactPage.LinksSection}>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://www.linkedin.com/')}}>
            <Ionicons name={'logo-linkedin'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://github.com/IagoIann')}}>
            <Ionicons name={'logo-github'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('mailto:')}}>
            <Ionicons name={'mail'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={StylesContactPage.PersonSection}>
        <View>
          <Text style={{fontSize: 15}}>João Sena</Text>
        </View>
        <View style={StylesContactPage.LinksSection}>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://www.linkedin.com/in/joaosena19/')}}>
            <Ionicons name={'logo-linkedin'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://github.com/joaosena19')}}>
            <Ionicons name={'logo-github'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('mailto:joaosenadainese@gmail.com')}}>
            <Ionicons name={'mail'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={StylesContactPage.PersonSection}>
        <View>
          <Text style={{fontSize: 15}}>Victor Lopes</Text>
        </View>
        <View style={StylesContactPage.LinksSection}>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://www.linkedin.com/in/victor-santos-a6b3491a2/')}}>
            <Ionicons name={'logo-linkedin'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://github.com/VictorLopes1010')}}>
            <Ionicons name={'logo-github'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('mailto:vlinvictus@gmail.com')}}>
            <Ionicons name={'mail'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
        </View>
      </View> 
      <View style={StylesContactPage.PersonSection}>
        <View>
          <Text style={{fontSize: 15}}>Yuri Witer</Text>
        </View>
        <View style={StylesContactPage.LinksSection}>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://www.linkedin.com/in/yuri-witer-12aba9181/')}}>
            <Ionicons name={'logo-linkedin'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('https://github.com/YuriWiter')}}>
            <Ionicons name={'logo-github'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
          <TouchableOpacity style={StylesContactPage.Link} onPress={() => {Linking.openURL('mailto:Ywiter@icloud.com')}}>
            <Ionicons name={'mail'} color={'#E05D25'} size={22} />
          </TouchableOpacity>
        </View>
      </View> 
      

      </View>
      <View style={{flex: 1}}>
        <GenericGoBackComponent/>
      </View>

    </BodyComponent>
    </>
  );
}

export default ContactPage;
