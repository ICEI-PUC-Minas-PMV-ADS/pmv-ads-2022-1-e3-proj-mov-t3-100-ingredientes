import { TextInput, TouchableOpacity,Text } from 'react-native';
import { View, KeyboardAvoidingView,Image } from 'react-native';
import Estilos from '../styles/TelaLogin';

export default function LoginPage() {
  return (
  <KeyboardAvoidingView style={Estilos.Tela}>
      <View style={Estilos.Imagem}>
        <Image 
          source={require('../assets/naruto.png')}
        />
      </View>
      <View style={Estilos.GridButon}> 
        <TextInput style={Estilos.Interface}
        placeholder='E-mail'
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TextInput style={Estilos.Interface}
        placeholder='Senha'
        secureTextEntry
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TouchableOpacity style={Estilos.Botao}>
          <Text style={Estilos.TextoBotao}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Estilos.BotaoRegistrar}>
          <Text style={Estilos.TextoRegistrar}>Criar conta gratis</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}
