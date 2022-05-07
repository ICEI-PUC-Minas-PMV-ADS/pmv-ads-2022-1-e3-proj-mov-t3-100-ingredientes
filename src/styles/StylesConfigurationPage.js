import { StyleSheet } from 'react-native';

const StylesConfigurationPage = StyleSheet.create({
ScreenCard: {
   flex: 1, 
   backgroundColor: '#FFFEFE', 
   margin: 13, 
   borderRadius: 5, 

   elevation: 10,
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 1,
   },
   shadowOpacity: 0.22,
   shadowRadius: 2.22,
},
SectionContent: {
   flex: 1,
   margin: 20,
},
SectionButtonsContainer: {
   marginHorizontal: 20,
   height: 40,
   alignItems: 'flex-end',
   justifyContent: 'flex-end',
   flexDirection: 'row',
},
SectionButtons: {   
   justifyContent: 'center',
   flexDirection: 'row',
},
SectionBottom: {
   height: 40,
   alignItems: 'center',
   justifyContent: 'center',
},  
EditButton:{
   backgroundColor: '#605B56',
   alignItems: 'center',
   justifyContent: 'center',
   height: 30,
   width: 100,
   borderRadius:2,
   margin: 5
},
SaveButton:{
   backgroundColor: '#E05D25',
   alignItems: 'center',
   justifyContent: 'center',
   height: 30,
   width: 100,
   borderRadius:2,
   margin: 5
},
DeleteRegion:{
   margin: 5,
},
DeleteRegionContainer: {
   flex: 1,
   height: '100%',
   alignItems: 'flex-start',
   justifyContent: 'center',
},
DeleteRegionText:{
   color:'red',
   fontSize:12,
   fontWeight: '400',
},
ButtonText:{
   color:'#FFFFFF',
   fontSize:12
}

});

export default StylesConfigurationPage;