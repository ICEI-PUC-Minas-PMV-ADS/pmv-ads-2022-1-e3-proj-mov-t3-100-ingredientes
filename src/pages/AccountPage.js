import {Text, View, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import StylesAccountPage from '../styles/StylesAccountPage';
import StylesGeneric from '../styles/StylesGeneric';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';
import GenericButtonComponent from '../components/GenericButtonComponent';
import RecipeListComponent from '../components/RecipeListComponent';
import { getOwnRecipesByUserId, getFavoriteRecipesByUserId } from '../services/recipes-service';
import { useUser } from './../contexts/UserContext';

const AccountPage = () => {
    const navigation = useNavigation();

    const {userId} = useUser();

    const [ownRecipes, setOwnRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const getOwnRecipes = async () =>{
        getOwnRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            console.log("Get own recipes by user id success");
            setOwnRecipes(response.data);
          }else{
            console.log("Get own recipes by user id failed");
            console.log(response);
          }
        })
    }
    
    const getFavoriteRecipes = async () =>{
        getFavoriteRecipesByUserId({
            userId: userId,
        }).then(async response => {  
          if(response && response.success){
            console.log("Get favorite recipes by user id success");
            setFavoriteRecipes(response.data);
          }else{
            console.log("Get favorite recipes by user id failed");
            console.log(response);
          }
        })
    }



    useEffect(() => {
      getOwnRecipes();
      getFavoriteRecipes();
    }, []);
    
    const dados=[
        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},        {id:'1',name:'Receita 001', imageUrl:'https://s3-alpha-sig.figma.com/img/952f/99ba/987a5e9dba94b0101051366fa648251c?Expires=1652659200&Signature=DhirJ893M7PN~~XMo7HZFlZ5ZxFQBkNDj3vPoKGoFuiLLitvo75H-uM2NWHXe-Dj1PIoImW5QCxp5LeV3gtubztVS0h~5bigyFp0AY4yLRRdkc6HeQ5fyPnaF8ywDfO69w1B8250GK2c7h2QuYndgZSJZg75qFAsrp5S0hnQ1bZv-vQfkSJA8RWAyD7axpMEpFpnk1gKFA4JfGkJLi9PM9lHu7osJXO3YHDsBMJ-3XsiratL4kRKoQqIPwBM5k1gzoYKVLxeu1keNWvvBsn~5SPXF-rm9pUgB3p8QXN-PyldWhvAYkZ6RjrVoYfs-OPppsPezY7FzNws282Re6y8rA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},

    ]
  return (
   <>
 <BodyComponent>
     <HeaderComponent></HeaderComponent>
    
    <View style={StylesAccountPage.Screen}> 
        <View style={StylesAccountPage.SectionRecipeList}>
            <Text style={StylesAccountPage.Title}>Minhas Receitas</Text>
            <View style={{flex: 9}}>
                <RecipeListComponent data={ownRecipes}></RecipeListComponent>
            </View>
            <View style={{flex: 2, marginTop: 15}}>
                <GenericButtonComponent>Ver todos</GenericButtonComponent>
            </View>
        </View>
        <View style = {StylesGeneric.Line} />
        <View style={StylesAccountPage.SectionRecipeList}>
            <Text style={StylesAccountPage.Title}>RECEITAS FAVORITAS</Text>
            <View style={{flex: 9}}>
                <RecipeListComponent data={favoriteRecipes}></RecipeListComponent>
            </View>
            <View style={{flex: 2, marginTop: 15}}>
                <GenericButtonComponent>Ver todos</GenericButtonComponent>
            </View>
        </View>
        <View style = {StylesGeneric.Line} />
        <View style={StylesAccountPage.SectionBottom}>
            <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center', margin:7}}>
                <Text style={StylesGeneric.LabelGeneric}>Alterar dados do </Text><Text style={StylesGeneric.LinkGeneric}>Perfil.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={StylesGeneric.LabelGeneric}>Preferencia de </Text><Text style={StylesGeneric.LinkGeneric}>Notificações.</Text>
            </TouchableOpacity>
        </View>
     </View>

    </BodyComponent>

    </>
  );
}

export default AccountPage;