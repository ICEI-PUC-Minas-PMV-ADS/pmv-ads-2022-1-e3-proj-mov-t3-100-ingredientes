import { useState } from 'react';
import { TextInput, TouchableOpacity,Text } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import StylesLoginPage from '../styles/StylesLoginPage';
import { login } from '../services/auth-service';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginPage = () => {
  const {setUserSigned, setUserName, setUserId} = useUser();

  const [email, setEmail] = useState('joao@gmail.com');
  const [password, setPassword] = useState('abc123');

  const handleLogin = () => {
    login({
      email: email,
      password: password
    }).then( response => {
      if(response && response.success){
        console.log("Login success")
        setUserSigned(true);
        setUserName(response.data.user.name);
        setUserId(response.data.user.id);
        AsyncStorage.setItem('@TOKEN_KEY', response.data.accessToken).then();
      }else{
        console.log("Login failed");
      }
    })
  }

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <KeyboardAvoidingView style={StylesLoginPage.Tela}>
          <View style={StylesLoginPage.Imagem}>
            <Image 
              source={require('../assets/naruto.png')}
            />
          </View>
          <View style={StylesLoginPage.GridButon}> 
            <TextInput style={StylesLoginPage.Interface}
            placeholder='E-mail'
            autoCorrect={false}
            onChangeText={(text) => setEmail(text)}
            />

            <TextInput style={StylesLoginPage.Interface}
            placeholder='Senha'
            secureTextEntry
            autoCorrect={false}
            onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity onPress={handleLogin} style={StylesLoginPage.Botao}>
              <Text style={StylesLoginPage.TextoBotao}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={StylesLoginPage.BotaoRegistrar}>
              <Text style={StylesLoginPage.TextoRegistrar}>Criar conta gratis</Text>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
    </BodyComponent>
    </>
  );
}

export default LoginPage;
