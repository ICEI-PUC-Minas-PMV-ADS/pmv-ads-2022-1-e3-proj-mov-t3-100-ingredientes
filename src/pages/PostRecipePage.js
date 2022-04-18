import { View, Text } from 'react-native';
import HeaderComponent from './../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';

const PostRecipePage = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <Text>Teste PostRecipe</Text>
    </BodyComponent>
    </>
  );
}

export default PostRecipePage;
