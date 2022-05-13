import { TextInput, Text } from 'react-native';
import { View,Image, } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import StylesRegisterPage from '../styles/StylesRegisterPage';
import BodyComponent from '../components/BodyComponent';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { register } from '../services/auth-service';
import StylesLoginPage from '../styles/StylesLoginPage';
import StylesGeneric from '../styles/StylesGeneric';



const Register = () => {

  const navigation = useNavigation();


  const [input, setInput] = useState('');
  const [inputDois, setInputDois] = useState('');

  const [inputEmail, setEmail] = useState('');
  const [inputEmailDois, setEmailDois] = useState('');

  const [hideEmail, setHideEmail] = useState(true);
  const [hideEmailDois, setHideEmailDois] = useState(true);

  const [hidePass, setHidePass] = useState(true);
  const [hidePassDois, setHidePassDois] = useState(true);

  const [registerFail, setRegisterFail] = useState(false);
  const [registerNull, setRegisterNull] = useState(false);
  const [registerSucess, setRegisterSucess] = useState(false);


  var error = "";

  var email, senha, email2, senha2;
  email = inputEmail;
  email2 = inputEmailDois;
  senha2 = inputDois;
  senha = input;

  function valida(inputMail, inputMail2, inputSenha, inputSenha2){
  
    setRegisterFail(false);
    setRegisterNull(false);
    

    if(inputMail != "" && inputMail2 != "" && inputSenha != "" && inputSenha2 != ""){
      (inputMail == inputMail2 && inputSenha == inputSenha2) ? handleRegister() : setRegisterFail(true);
    }
    else{
      setRegisterNull(true);
    }
  }

  const handleRegister = () => {

    setRegisterSucess(false);

    register({
      email: email,
      password: senha
    }).then( response => {
      if(response && response.success){
        console.log("Register success")
        setRegisterSucess(true);
      }else{
        console.log("Register failed");
        
        console.log(response);
      }
    })
  }

 /* function post(email, password){
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then( (resposta) => resposta.json )
        .then( (json) => console.log(json) )
        .catch( (error) => console.log(error) )
  }
*/
  return (
    <>
    <HeaderComponent></HeaderComponent>
    
    <BodyComponent style>
     <View style={StylesRegisterPage.ImageSection}>
        <Image style={StylesRegisterPage.Image}
          source={require('../assets/images/login.png')}
        />
  </View> 
    

    <View style={StylesRegisterPage.container}>
    <View>
      <Text style={StylesRegisterPage.title}>Register</Text>
    </View>
        <Text style={StylesRegisterPage.text}>Informe o E-Mail</Text>
        <View style={StylesRegisterPage.inputArea}>
          <TextInput placeholder='Informe seu E-Mail'
            style={StylesRegisterPage.input}
            value={inputEmail}
            onChangeText = { (Text) => {
              setEmail(Text)
              setHideEmail(false) 
            } }
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
        <Text style={StylesRegisterPage.text}>Confirme o E-Mail</Text>
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

        <Text style={StylesRegisterPage.text}>Informe a sua Senha</Text>
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
        <Text style={StylesRegisterPage.text}>Confirme a sua Senha</Text>
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

        <View>
        <Text style={StylesLoginPage.AlertLabel}>{ registerFail ? 'Email ou senha incorretos!' : null }</Text>
        <Text style={StylesLoginPage.AlertLabel}>{registerNull ? 'Email ou Senha em branco' : null}</Text>
        <Text style={StylesLoginPage.AlertLabel}>{registerSucess ? 'Registrado com Sucesso' : null}</Text>
        <Text  onPress={() => valida(email, email2, senha, senha2)}>Registrar</Text>
        <TouchableOpacity style={StylesLoginPage.CreateAccount} onPress={() => navigation.navigate('MainPage')}>
            <Text style={StylesGeneric.LinkGeneric}>Welcome</Text>
        </TouchableOpacity>
        
      </View>

      </View>
      
      </BodyComponent>
      </>
      
  );
}

export default Register;