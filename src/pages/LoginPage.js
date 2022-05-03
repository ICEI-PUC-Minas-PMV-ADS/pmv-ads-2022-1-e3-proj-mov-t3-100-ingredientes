import { useEffect, useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import StylesLoginPage from '../styles/StylesLoginPage';
import { login } from '../services/auth-service';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const LoginPage = () => {
  const {setUserSigned, userSigned, setUserName, setUserId} = useUser();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const [email, setEmail] = useState('joao@gmail.com');
  const [password, setPassword] = useState('abc123');
  

  const navigation = useNavigation();

  const handleLogin = () => {
    setLoading(true);
    setLoginError(false);

    login({
      email: email,
      password: password
    }).then( response => {
      setLoading(false);

      if(response && response.success){
        console.log("Login success")
        
        setUserSigned(true);
        setUserName(response.data.user.name);
        setUserId(response.data.user.id);
        AsyncStorage.setItem('@TOKEN_KEY', response.data.accessToken).then();

        navigation.navigate('MainPage');
      }else{
        console.log("Login failed");

        setLoginError(true);
        setPassword('');
      }
    })
  }

  useEffect(() => {
    if(userSigned)
      navigation.navigate('MainPage');
  })

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={StylesLoginPage.Screen} behavior="padding">
            <View style={StylesLoginPage.ImageSection}>
              <Image style={StylesLoginPage.Image}
                source={require('../assets/images/login.png')}
              />
            </View> 
            <View style={StylesLoginPage.InteractionSection}> 

              <Text style={StylesLoginPage.LoginLabel}>Login</Text>
              
              <Text style={StylesLoginPage.InputLabel}>Endereço de E-mail</Text>

              <TextInput
              style={StylesLoginPage.Input}
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
              />

              <Text style={StylesLoginPage.InputLabel}>Senha</Text>

              <TextInput 
              style={StylesLoginPage.Input}
              placeholder="***********"
              secureTextEntry
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
              />

              <Text style={StylesLoginPage.AlertLabel}>{ loginError ? 'Email ou senha incorretos!' : null }</Text>

              <TouchableOpacity onPress={handleLogin} style={StylesLoginPage.LoginButton}>
                { loading
                  ? <ActivityIndicator size="small" color="#FFFFFF" />
                  : <Text style={StylesLoginPage.LoginButtonLabel}> Acessar </Text>             
                }    
              </TouchableOpacity>

              <TouchableOpacity style={StylesLoginPage.CreateAccount} onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={StylesLoginPage.LabelGeneric}>Não tem uma conta? </Text><Text style={StylesLoginPage.LinkGeneric}>Criar nova conta.</Text>
              </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BodyComponent>
    </>
  );
}

export default LoginPage;
