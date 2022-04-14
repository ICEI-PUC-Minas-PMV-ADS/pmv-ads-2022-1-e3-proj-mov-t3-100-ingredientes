import { TextInput, TouchableOpacity,Text } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import StylesLoginPage from '../styles/StylesLoginPage';

const LoginPage = () => {
  return (
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
          <Text style={StylesLoginPage.TextoRegistrar}>Criar conta gratis</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginPage;
