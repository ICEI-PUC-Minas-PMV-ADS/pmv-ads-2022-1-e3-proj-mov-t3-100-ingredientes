import { View,Image, TextInput, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { register } from '../services/auth-service';
import { validateRegister } from '../services/users-service';
import StylesLoginPage from '../styles/StylesLoginPage';
import StylesGeneric from '../styles/StylesGeneric';
import StylesRegisterPage from '../styles/StylesRegisterPage';
import { useUser } from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = () => {

  const navigation = useNavigation();
  const {setUserSigned, setUserName, setUserId} = useUser();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');

  const [hidePassword, setHidePassword] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const [registerSucess, setRegisterSucess] = useState(false);
 
  const handleRegister = async () => {
    setRegisterSucess(false);
    setErrorMessage('');
    
    let validation = await validateRegister({name: name, email: email, emailConfirm: emailConfirm, password: password, passwordConfirm: passwordConfirm});

    if(!validation.success){
      setErrorMessage(validation.errorMessage);
      return;
    }
    
    register({
      name: name,
      email: email,
      password: password
    }).then( response => {
      if(response && response.success){
        console.log("Register success");
        setRegisterSucess(true);

        setUserSigned(true);
        setUserName(response.data.user.name);
        setUserId(response.data.user.id);
        AsyncStorage.setItem('@TOKEN_KEY', response.data.accessToken).then();
        
      }else{
        console.log("Register failed");
        
        console.log(response);
      }
    })
  }

  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent style>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={StylesLoginPage.Screen} behavior="padding">
          <View style={StylesRegisterPage.ImageSection}>
              <Image style={StylesRegisterPage.Image}
                source={require('../assets/images/register.png')}
              />
          </View> 

          <View style={StylesRegisterPage.InteractionSection}>
            <Text style={StylesGeneric.GenericMajorLabel}>Register</Text>

            <Text style={StylesGeneric.GenericInputLabelGray}>Nome</Text>
            <TextInput
              style={StylesGeneric.GenericInput}
              placeholder="Insira seu nome aqui"
              autoCorrect={true}
              onChangeText={(text) => setName(text)}
            />

            <Text style={StylesGeneric.GenericInputLabelGray}>Endereço de E-mail</Text>
            <TextInput
              style={StylesGeneric.GenericInput}
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={StylesGeneric.GenericInputLabelGray}>Confirme o endereço de E-mail</Text>
            <TextInput
              style={StylesGeneric.GenericInput}
              placeholder="nome@email.com"
              autoCorrect={true}
              onChangeText={(text) => setEmailConfirm(text)}
            />

            <Text style={StylesGeneric.GenericInputLabelGray}>Senha</Text>
            <View style={StylesRegisterPage.PasswordInputRegion}>
              <TextInput 
                style={StylesRegisterPage.PasswordInput}
                placeholder="***********"
                secureTextEntry={hidePassword}
                autoCorrect={false}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={StylesRegisterPage.PasswordInputIcon}>
                <TouchableOpacity onPress={ () => setHidePassword(!hidePassword) }>
                  <Ionicons name={hidePassword ? 'eye' : 'eye-off'} color={'#E05D25'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={StylesGeneric.GenericInputLabelGray}>Confirme a senha</Text>
            <View style={StylesRegisterPage.PasswordInputRegion}>
              <TextInput 
                style={StylesRegisterPage.PasswordInput}
                placeholder="***********"
                secureTextEntry={hidePassword}
                autoCorrect={false}
                onChangeText={(text) => setPasswordConfirm(text)}
              />
              <View style={StylesRegisterPage.PasswordInputIcon}>
                <TouchableOpacity onPress={ () => setHidePassword(!hidePassword) }>
                  <Ionicons name={hidePassword ? 'eye' : 'eye-off'} color={'#E05D25'} size={20} />
                </TouchableOpacity>
              </View>
            </View>
              
            <View style={StylesRegisterPage.BottomSection}>
              {errorMessage != '' && <Text style={StylesLoginPage.AlertLabel}>{errorMessage}</Text>}
              <Text style={StylesLoginPage.AlertLabel}>{registerSucess ? 'Registrado com Sucesso' : null}</Text>
              
              <TouchableOpacity style={StylesGeneric.GenericMajorButton} onPress={ () => {handleRegister()}}>
                <Text style={StylesGeneric.GenericMajorButtonLabel}>Registrar</Text>
              </TouchableOpacity>

            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BodyComponent>
      </>
      
  );
}

export default Register;