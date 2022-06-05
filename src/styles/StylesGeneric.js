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
   LabelGenericBlack:{
      fontSize: 13,
      color: '#000000',
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
   GenericMajorLabel: {
      fontSize: 45,
      fontWeight: '400',
      color: '#000000',
      marginBottom: 11
   },
   GenericMajorButton:{
      backgroundColor: '#E05D25',
      alignItems: 'center',
      justifyContent: 'center',
      height: 62,
      width: '90%',
      borderRadius:7,
      alignSelf: 'center',
      marginBottom: 20
   },
   GenericMajorButtonLabel:{
      color:'#FFFFFF',
      fontSize:23
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
   GenericButtonGray:{
      backgroundColor: '#605B56',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 100,
      borderRadius:2,
      margin: 5
   },
   GenericButtonOrange:{
      backgroundColor: '#E05D25',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 100,
      borderRadius:2,
      margin: 5
   },
   GenericWhiteButtonText:{
      color:'#FFFFFF',
      fontSize:12
   },
   GenericSearchInputRegion:{
      flexDirection:"row",
      justifyContent: "space-between",
      width: '70%',
      alignSelf: "center",
      paddingTop: 10,
   },
   GenericSearchInput:{
      flex: 1,
      backgroundColor:"#d3d3d3",
      borderRadius:10,
      color:"white",
      fontSize: 18,
      paddingHorizontal: 15, 
      shadowOpacity: 5,
      shadowRadius: 10,
   }
});

export default StylesGeneric;