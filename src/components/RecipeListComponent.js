import { TouchableOpacity, Text, StyleSheet, Dimensions, FlatList, Image } from 'react-native';

const RecipeListComponent = (props) => {
  const screenWidth = Dimensions.get('window').width;
  const columns = Math.floor(screenWidth / 100);

  return (
    <FlatList
      data={props.data}
      keyExtractor={(item)=>item.id}
      numColumns={columns}
      
      renderItem={({item})=> {
          return(
          <TouchableOpacity style={StylesRecipeList.RecipeContainer}>   
              <Text numberOfLines={1} style= {StylesRecipeList.RecipeContainerText}>{item.name}</Text>
              <Image style= {StylesRecipeList.RecipeContainerImage} source={{uri:item.imageUrl}}/>
          </TouchableOpacity>
          );
      }}
    />
  );
}

const StylesRecipeList = StyleSheet.create({
  RecipeContainer:{
    height: 96,
    width: 96,
    margin: 5,
    alignItems: 'center',
 }, 

 RecipeContainerText:{
    color:'#0D0000',
    fontSize:12,
    marginBottom: 6,
 },

 RecipeContainerImage: {
    width: 80,
    height: 60,
    borderRadius:7,
 }
});

export default RecipeListComponent;