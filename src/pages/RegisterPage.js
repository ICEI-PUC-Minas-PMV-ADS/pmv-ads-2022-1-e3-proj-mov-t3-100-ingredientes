import { TextInput, Text } from 'react-native';
import { View,Image, } from 'react-native';
import { Button } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent';
import StylesRegisterPage from '../styles/StylesRegisterPage';
import BodyComponent from '../components/BodyComponent';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Register = () => {

  const [input, setInput] = useState('');
  const [inputDois, setInputDois] = useState('');

  const [inputEmail, setEmail] = useState('');
  const [inputEmailDois, setEmailDois] = useState('');

  const [hideEmail, setHideEmail] = useState(true);
  const [hideEmailDois, setHideEmailDois] = useState(true);

  const [hidePass, setHidePass] = useState(true);
  const [hidePassDois, setHidePassDois] = useState(true);

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>

    <View style={StylesRegisterPage.container}>

        <Text>Informe o E-Mail</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Informe seu E-Mail'
            style={StylesRegisterPage.input}
            value={inputEmail}
            onChangeText = { (Text) => {setEmail(Text)
              setHideEmail(false)} }
          />
          <TouchableOpacity style={StylesRegisterPage.icon}>
            {
              hideEmail ?
                <Ionicons name='close' color={'#fff'} size={25} />
              :
                <Ionicons name='checkmark-outline' color={'#fff'} size={25} />
            }
          </TouchableOpacity>
        </View>
        <Text>Confirme o E-Mail</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Confirme seu E-Mail'
            style={StylesRegisterPage.input}
            value={inputEmailDois}
            onChangeText = { (TextDois) => {setEmailDois(TextDois) 
              setHideEmailDois(false)}}
          />
          <TouchableOpacity style={StylesRegisterPage.icon}>
            {
              hideEmailDois ?
                <Ionicons name='close' color={'#fff'} size={25} />
              :
                <Ionicons name='checkmark-outline' color={'#fff'} size={25} />
            }
          </TouchableOpacity>
        </View>

        <Text>Informe a sua Senha</Text>
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
        <Text>Confirme a sua Senha</Text>
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