import { TextInput, Text } from 'react-native';
import { View,Image, } from 'react-native';
import { Button } from 'react-native-paper';
import HeaderComponent from '../components/HeaderComponent';
import StylesLoginPage from '../styles/StylesLoginPage';
import StylesRegisterPage from '../styles/StylesRegisterPage';
import BodyComponent from '../components/BodyComponent';
import { TouchableOpacity } from 'react-native-web';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View style={StylesLoginPage.GridButon}>
        <Text>E-MAIL ADDRESS</Text>
        <TextInput style={StylesLoginPage.Interface}
            autoCorrect={false}
            onChangeText={()=>{}}
        />

        <Text>CONFIRM E-MAIL ADDRESS</Text>
        <TextInput style={StylesLoginPage.Interface}
            autoCorrect={false}
            onChangeText={()=>{}}
        />

        <Text>PASSWORD</Text>
        
        <View>
        <TouchableOpacity style={StylesRegisterPage.icon}>
          <Ionicons name='eye' color={'#fff'} size={25} />
        </TouchableOpacity>
        
        <TextInput style={StylesLoginPage.Interface}
            secureTextEntry
            autoCorrect={false}
            onChangeText={()=>{}}
        />
        </View>

        <Text>CONFIRM PASSWORD</Text>
        <TextInput style={StylesLoginPage.Interface}
            secureTextEntry
            autoCorrect={false}
            onChangeText={()=>{}}
        />
        <Button style={StylesRegisterPage.button}>Register</Button>
      </View>
    </BodyComponent>
    </>
  );
}

export default Register;