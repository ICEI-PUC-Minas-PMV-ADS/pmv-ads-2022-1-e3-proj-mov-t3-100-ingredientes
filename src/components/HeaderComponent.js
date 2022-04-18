import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {

  const navigation = useNavigation();

  return (
    <View style={Styles.Header}>
      <Button mode="text" onPress={() => navigation.navigate('LoginPage')}>Login</Button>
      <Button mode="text" onPress={() => navigation.navigate('MainPage')}>Pesquisar</Button>
      <Button mode="text" onPress={() => navigation.navigate('PostRecipePage')}>Postar</Button>
    </View>
  );
}

const Styles = StyleSheet.create({
    Header: {
       backgroundColor: 'red',
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'space-around'
    },
    HeaderButton:{
   
    }
});

export default HeaderComponent;
