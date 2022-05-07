import {Text, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import {useState, useEffect} from 'react';
import StylesConfigurationPage from '../styles/StylesConfigurationPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericGoBackComponent from '../components/GenericGoBackComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { useUser } from './../contexts/UserContext';
import {redirectUnauthenticatedToLogin} from '../services/auth-service'
import { getUserById, updateUser } from '../services/users-service';

const ConfigurationPage = () => {
  //redirectUnauthenticatedToLogin();
  const {userId} = useUser();
  const [editing, setEditing] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');


  const getUser = async () =>{
    getUserById({
        userId: userId,
    }).then(async response => {  
      if(response && response.success){
        console.log("Get user by id success");
        setUserName(response.data.name);
        setUserEmail(response.data.email);
      }else{
        console.log("Get user by id failed");
        console.log(response);
        //navigation.navigate('LoginPage');
      }
    })
  }

  const handleUpdate = () => {
    setEditSuccess(false);

    updateUser({
      id: userId,
      name: userName,
      email: userEmail,
      password: userPassword,
      passwordConfirm: userPasswordConfirm
    }).then( response => {
      if(response && response.success){
        console.log("Update user success");

        setEditing(!editing);
        setEditSuccess(true);
        setErrorMessage('');
        getUser();
      }else{
        setErrorMessage(response.data);

        console.log("Update user failed");
        console.log(response);
      }
    })
  }

  const cancelUpdate = () => {
    setEditing(!editing);
    setErrorMessage('');

    setUserPassword('');
    setUserPasswordConfirm('');
  }

useEffect(() => {
  getUser();
}, []); 
    
  return (
   <>
     <HeaderComponent></HeaderComponent>
     <BodyComponent>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={StylesConfigurationPage.ScreenCard}>
        <ScrollView style={StylesConfigurationPage.SectionContent}>

          <Text style={StylesGeneric.GenericInputLabelBlack}>Nome</Text>
          {!editing && <Text style={StylesGeneric.GenericInput}>{userName}</Text>}
          {editing && <TextInput
            style={StylesGeneric.GenericInput}
            placeholder="Nome"
            value={userName}
            autoCorrect={true}
            onChangeText={(text) => setUserName(text)}
          />}

          <Text style={StylesGeneric.GenericInputLabelBlack}>Endereço de E-mail</Text>
          {!editing && <Text style={StylesGeneric.GenericInput}>{userEmail}</Text>}
          {editing && <TextInput
            style={StylesGeneric.GenericInput}
            placeholder="nome@email.com"
            value={userEmail}
            autoCorrect={true}
            onChangeText={(text) => setUserEmail(text)}
          />}

          {editing && <Text style={StylesGeneric.GenericInputLabelBlack}>Senha</Text>}
          {editing && <TextInput
            style={StylesGeneric.GenericInput}
            placeholder="***********"
            secureTextEntry
            autoCorrect={false}
            onChangeText={(text) => setUserPassword(text)}
          />}

          {editing && <Text style={StylesGeneric.GenericInputLabelBlack}>Confirmar Senha</Text>}
          {editing && <TextInput
            style={StylesGeneric.GenericInput}
            placeholder="***********"
            secureTextEntry
            autoCorrect={false}
            onChangeText={(text) => setUserPasswordConfirm(text)}
          />}

          {errorMessage != '' && <Text style={StylesGeneric.GenericLabelAlert}>{errorMessage}</Text>}
          {editSuccess && <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={StylesGeneric.LabelGeneric}>Cadastro atualizado com sucesso! 😊😊😊😊</Text>
          </View>}

        </ScrollView>
        <View style={StylesConfigurationPage.SectionButtonsContainer}>
          <View style={StylesConfigurationPage.DeleteRegionContainer}>
            {editing && <TouchableOpacity style={StylesConfigurationPage.DeleteRegion}>
              <Text style={StylesConfigurationPage.DeleteRegionText}>Deletar conta</Text>
            </TouchableOpacity>}
          </View>
          <View style={StylesConfigurationPage.SectionButtons}>
                {!editing && <TouchableOpacity style={StylesConfigurationPage.EditButton} onPress={() => setEditing(!editing)}>
                  <Text style={StylesConfigurationPage.ButtonText}>Editar</Text>
                </TouchableOpacity>}
                {editing && <TouchableOpacity style={StylesConfigurationPage.EditButton} onPress={() => cancelUpdate()}>
                  <Text style={StylesConfigurationPage.ButtonText}>Cancelar</Text>
                </TouchableOpacity>}
                {editing && <TouchableOpacity style={StylesConfigurationPage.SaveButton} onPress={() => handleUpdate()}>
                  <Text style={StylesConfigurationPage.ButtonText}>Salvar</Text>
                </TouchableOpacity>}
          </View>  
        </View>
        <View style={StylesConfigurationPage.SectionBottom}>
          <GenericGoBackComponent/>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </BodyComponent>

    </>
  );
}

export default ConfigurationPage;