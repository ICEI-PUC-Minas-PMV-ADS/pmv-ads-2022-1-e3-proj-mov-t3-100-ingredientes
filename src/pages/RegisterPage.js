import { View, Text } from 'react-native';
import HeaderComponent from './../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';

const Register = () => {
  return (
    <>
    <HeaderComponent></HeaderComponent>
    <BodyComponent>
      <Text>Teste RegisterPage</Text>
    </BodyComponent>
    </>
  );
}

export default Register;