import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GenericButtonComponent = ({children}) => {
    return (
      <TouchableOpacity style={StylesGenericButton.GenericButton}>
        <Text style={StylesGenericButton.GenericButtonText}>{children}</Text>
      </TouchableOpacity>
    );
  }

const StylesGenericButton = StyleSheet.create({
  GenericButton:{
    backgroundColor: '#E05D25',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 100,
    borderRadius:2,
    alignSelf: 'center',
    marginBottom: 20
 },

 GenericButtonText:{
    color:'#FFFFFF',
    fontSize:12
 }
});

export default GenericButtonComponent;