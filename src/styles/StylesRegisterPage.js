StylesRegisterPage

import { StyleSheet } from 'react-native';

const StylesRegisterPage = StyleSheet.create({
    ImageSection: {
        flex: 13
     },
     Image:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
     },
     InteractionSection: {
        flex: 26,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
  
     },
     BottomSection: {
         alignItems: 'center',
         flexDirection: 'column',
         justifyContent: 'flex-end'
         
     },
     PasswordInput:{
        width: '90%',
        borderBottomWidth: 1,
        marginBottom: 9,
        borderBottomColor: '#C2C2C2'
     },
     PasswordInputRegion: {
        flexDirection: 'row',
        width: '100%'
     },
     PasswordInputIcon: {
        width: '10%', 
        alignItems: 'flex-end'
     }
})

export default StylesRegisterPage;