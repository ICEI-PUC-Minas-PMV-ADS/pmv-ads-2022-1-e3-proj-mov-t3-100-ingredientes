import { StyleSheet } from 'react-native';

const StylesRegisterPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#ff9930',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        height:45,
        borderRadius:7
    },
    inputArea: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#121212',
        borderRadius: 5,
        height: 50,
        alignItems: 'center'
     },
     input: {
         width: '85%',
         height: 50,
         color: '#fff',
         padding: 8,
         fontSize: 18
     },
     icon: {
         width: '15%',
         height: 50,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: 'red'
     }
})

export default StylesRegisterPage;