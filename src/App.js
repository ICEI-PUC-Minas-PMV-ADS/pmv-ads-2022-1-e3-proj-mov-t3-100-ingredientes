import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import PostRecipePage from './pages/PostRecipePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PostRecipePage" component={PostRecipePage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};

export default App;
