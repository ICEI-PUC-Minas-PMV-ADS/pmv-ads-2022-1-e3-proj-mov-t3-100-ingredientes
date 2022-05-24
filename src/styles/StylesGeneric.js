import { StyleSheet } from 'react-native';

const StylesGeneric = StyleSheet.create({
   LineGeneric:{
      borderWidth: 0.5,
      borderColor:'#00000080',
      width: '90%',
      alignSelf: 'center',
   },
   LabelGeneric:{
      fontSize: 13,
      color: '#00000080',
   },
   LinkGeneric: {
      fontSize: 13,
      color: '#E05D25',
      fontWeight: '700'
   },   
   GenericLabelAlert: {
      fontSize: 14,
      fontWeight: '400',
      color: 'red',
      alignSelf: 'center',
      paddingBottom: 20
   },
   GenericTitle:{
      fontSize: 13,
      color: '#000000',
      padding: 21,
      textTransform: 'uppercase'
   },
   GenericInput:{
      borderBottomWidth: 1,
      marginBottom: 9,
      borderBottomColor: '#C2C2C2'
   },
   GenericInputLabelBlack:{
      textTransform: 'uppercase',
      fontSize: 13,
      color: '#000000'
   },
   GenericInputLabelGray:{
      textTransform: 'uppercase',
      fontSize: 13,
      color: '#00000075'
   },



});

export default StylesGeneric;