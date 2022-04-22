import {Text, FlatList, Image, SafeAreaView,TouchableOpacity} from 'react-native';
import StylesMyAccount from '../styles/StylesMyAccount';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import { useNavigation } from '@react-navigation/native';

const MyAccount = () => {
    const navigation = useNavigation();

    const semImagem = require("../assets/semImagem.png");
    const columns = 3;
    const dados=[
        {id:'1',Nome:'Receita 001',Imagem:semImagem},
        {id:'2',Nome:'Receita 002',Imagem:semImagem},
        {id:'3',Nome:'Receita 003',Imagem:semImagem},
        {id:'4',Nome:'Receita 004',Imagem:semImagem},
        {id:'5',Nome:'Receita 005',Imagem:semImagem},
        {id:'6',Nome:'Receita 006',Imagem:semImagem},
   //     {id:'7',Nome:'Receita 007',Imagem:semImagem},
   //     {id:'8',Nome:'Receita 008',Imagem:semImagem},
   //     {id:'9',Nome:'Receita 009',Imagem:semImagem},
   //     {id:'10',Nome:'Receita 010',Imagem:semImagem},
    ]
  return (
   <>
 <BodyComponent>
     <HeaderComponent></HeaderComponent>
    
    <SafeAreaView style = {StylesMyAccount.Tela}> 
        <Text style={StylesMyAccount.Texto}>MINHAS RECEITAS</Text>
            <FlatList 
                data={dados}
                keyExtractor={(item)=>item.id}
                numColumns={columns}
                
                renderItem={({item})=> {
                    return(
                    <TouchableOpacity style= {StylesMyAccount.GridPadrao} >   
                        <Text style= {StylesMyAccount.TextoItem}>{item.Nome}</Text>
                        <Image style={StylesMyAccount.ImagemItem} source={item.Imagem}/>
                    </TouchableOpacity>
                    );
                }}
            />
            <TouchableOpacity style={StylesMyAccount.Botao} onPress={() => navigation.navigate('MyListRecipe')} >
              <Text style={StylesMyAccount.TextoBotao}>Ver Mais</Text>
            </TouchableOpacity>

            <Text style={StylesMyAccount.Texto}>RECEITAS FAVORITAS</Text>
             <FlatList
                data={dados}
                keyExtractor={(item)=>item.id}
                numColumns={columns}
                renderItem={({item})=> {
                    return(
                        <TouchableOpacity style= {StylesMyAccount.GridPadrao} >   
                            <Text style= {StylesMyAccount.TextoItem}>{item.Nome}</Text>
                            <Image style={StylesMyAccount.ImagemItem} source={item.Imagem}/>
                        </TouchableOpacity>
                    );
                }}/>
            <TouchableOpacity style={StylesMyAccount.Botao} >
              <Text style={StylesMyAccount.TextoBotao}>Ver Mais</Text>
            </TouchableOpacity>
            <Text style={StylesMyAccount.Texto}> Alterar dados do Perfil. </Text>
            <Text style={StylesMyAccount.Texto}>Preferencia de Notificações.</Text>
     </SafeAreaView>

    </BodyComponent>

    </>
  );
}

export default MyAccount;