import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={Styles.Header}>
      <Button mode="text">Login</Button>
      <Button mode="text">Pesquisar</Button>
      <Button mode="text">Postar</Button>
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
