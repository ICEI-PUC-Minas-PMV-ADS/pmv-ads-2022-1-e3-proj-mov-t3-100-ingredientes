import { TextInput, Text } from 'react-native';
import { View,Image, } from 'react-native';
import { Button } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent';
import StylesRegisterPage from '../styles/StylesRegisterPage';
import BodyComponent from '../components/BodyComponent';
import { TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Register = () => {

  const [input, setInput] = useState('');
  const [inputDois, setInputDois] = useState('');

  const [hidePass, setHidePass] = useState(true);
  const [hidePassDois, setHidePassDois] = useState(true);

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
    <View style={StylesRegisterPage.container}>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Insira sua Senha'
            style={StylesRegisterPage.input}
            value={input}
            onChangeText={ (textoDigitado) => setInput(textoDigitado) }
            secureTextEntry={hidePass}
          />
          <TouchableOpacity style={StylesRegisterPage.icon} onPress={ () => setHidePass(!hidePass) }>
            { hidePass ?
                <Ionicons name='eye' color={'#fff'} size={25} />
              :
              <Ionicons name='eye-off' color={'#fff'} size={25} />
          }
          </TouchableOpacity>
          
        </View>

        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Confirme sua Senha'
            style={StylesRegisterPage.input}
            value={inputDois}
            onChangeText={ (textoDigitadoDois) => setInputDois(textoDigitadoDois) }
            secureTextEntry={hidePassDois}
          />
          <TouchableOpacity style={StylesRegisterPage.icon} onPress={ () => setHidePassDois(!hidePassDois) }>
            { hidePassDois ?
                <Ionicons name='eye' color={'#fff'} size={25} />
              :
              <Ionicons name='eye-off' color={'#fff'} size={25} />
          }
          </TouchableOpacity>
          
        </View>

      </View>
      </BodyComponent>
      </>
      
  );
}

export default Register;