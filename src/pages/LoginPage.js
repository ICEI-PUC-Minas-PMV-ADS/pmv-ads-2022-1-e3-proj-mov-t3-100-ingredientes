import { useEffect, useState } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import StylesLoginPage from '../styles/StylesLoginPage';
import StylesGeneric from '../styles/StylesGeneric';
import { login } from '../services/auth-service';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import { insertLoginOptions, getLoginOptions, updateLoginOptions } from '../services/sqlite-service';



const LoginPage = () => {
  const {setUserSigned, userSigned, setUserName, userId, setUserId} = useUser();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const [email, setEmail] = useState('joao@gmail.com');
  const [password, setPassword] = useState('abc123');
  const [keepConnected, setKeepConnected] = useState(false);

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

        //get login options
        let loginOptions = {};//getLoginOptions({userId: response.data.user.id});

        if(loginOptions == undefined || loginOptions == {} || loginOptions == null)
          insertLoginOptions({keepConnected: keepConnected ? 1 : 0, userId: response.data.user.id, email: keepConnected ? email : null, password: keepConnected ? password : null})

        if(loginOptions != undefined && loginOptions != {} && loginOptions != null)
          updateLoginOptions({keepConnected: keepConnected ? 1 : 0, userId: response.data.user.id, email: keepConnected ? email : null, password: keepConnected ? password : null})
          
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

    let loginOptions = {};//getLoginOptions({userId: userId});

    if(loginOptions == undefined || loginOptions == {} || loginOptions == null)
      if(loginOptions.keepConnected == 1 && loginOptions.email != null && loginOptions.password != null){
        setEmail(loginOptions.email);
        setPassword(loginOptions.password);
        handleLogin();
      }
    
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
              
              <Text style={StylesGeneric.GenericInputLabelGray}>Endereço de E-mail</Text>

              <TextInput
              style={StylesGeneric.GenericInput}
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
              />

              <Text style={StylesGeneric.GenericInputLabelGray}>Senha</Text>

              <TextInput 
              style={StylesGeneric.GenericInput}
              placeholder="***********"
              secureTextEntry
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
              />

              <Text style={StylesGeneric.GenericLabelAlert}>{ loginError ? 'Email ou senha incorretos!' : null }</Text>

              <TouchableOpacity onPress={handleLogin} style={StylesLoginPage.LoginButton}>
                { loading
                  ? <ActivityIndicator size="small" color="#FFFFFF" />
                  : <Text style={StylesLoginPage.LoginButtonLabel}> Acessar </Text>             
                }    
              </TouchableOpacity>

              <TouchableOpacity style={StylesLoginPage.CreateAccount} onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={StylesGeneric.LabelGeneric}>Não tem uma conta? </Text><Text style={StylesGeneric.LinkGeneric}>Criar nova conta.</Text>
              </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BodyComponent>
    </>
  );
}

export default LoginPage;
