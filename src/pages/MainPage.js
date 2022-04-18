import { View, Text } from 'react-native';
import StylesMainPage from '../styles/StylesMainPage';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';

const MainPage = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <View>
      <Text>Teste Página Principal</Text>

      </View>
    </BodyComponent>
    </>
  );
}

export default MainPage;
