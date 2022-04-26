import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PostRecipePage from './pages/PostRecipePage';
import RegisterPage from './pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserProvider from './contexts/UserContext';
import MyAccount from './pages/MyAccount';
import MyListRecipe from './pages/MyListRecipe';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage" screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainPage" component={MainPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="PostRecipePage" component={PostRecipePage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="MyAccount" component={MyAccount}/>
        <Stack.Screen name="MyListRecipe" component={MyListRecipe}/>
        </Stack.Navigator>
      </NavigationContainer>   
    </UserProvider> 
  );
};

export default App;
