import { View, Text } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent'

const MainPage = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <View style={StylesMainPage.Body}>
      <Text>Teste Página Principal</Text>
    </View>
    </>
  );
}

export default MainPage;
