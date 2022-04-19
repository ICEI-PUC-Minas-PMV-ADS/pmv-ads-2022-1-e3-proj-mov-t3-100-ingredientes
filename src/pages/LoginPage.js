import { TextInput, TouchableOpacity,Text } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import StylesLoginPage from '../styles/StylesLoginPage';

import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const LoginPage = () => {

  const navigation = useNavigation();

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
            onChangeText={()=>{}}
            />

            <TextInput style={StylesLoginPage.Interface}
            placeholder='Senha'
            secureTextEntry
            autoCorrect={false}
            onChangeText={()=>{}}
            />

            <TouchableOpacity style={StylesLoginPage.Botao}>
              <Text style={StylesLoginPage.TextoBotao}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={StylesLoginPage.BotaoRegistrar}>
             {/* <Text style={StylesLoginPage.TextoRegistrar} onPress={() => navigation.navigate('RegisterPage')}>Criar conta gratis</Text> */}
             <Button mode="text" onPress={() => navigation.navigate('RegisterPage')}>Register</Button>
            </TouchableOpacity>

          </View>
        </KeyboardAvoidingView>
    </BodyComponent>
    </>
  );
}

export default LoginPage;
