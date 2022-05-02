import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View , StatusBar } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

const HeaderComponent = () => {
  const {userSigned} = useUser();

  const navigation = useNavigation();

  return (
    <View style={Styles.Header}>
      <StatusBar barStyle = "light-content"
        hidden = {false}
        backgroundColor = "#ff9930"
        translucent = {false}
        networkActivityIndicatorVisible = {true}/>
      { userSigned ? <Button mode="text" onPress={() => navigation.navigate('AccountPage')}>Conta</Button> : null }
      { !userSigned ? <Button mode="text" onPress={() => navigation.navigate('LoginPage')}>Login</Button> : null }
      <Button mode="text" onPress={() => navigation.navigate('MainPage')}>Pesquisar</Button>
      <Button mode="text" onPress={() => navigation.navigate('PostRecipePage')}>Postar</Button>
    </View>  
  );
}

const Styles = StyleSheet.create({
    Header: {
       flexDirection: 'row',
       justifyContent: 'space-around'
    },
    HeaderButton:{
   
    }
});

export default HeaderComponent;