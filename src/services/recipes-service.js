import { includes } from 'json-server-auth';
import API, {BASE_URL} from './webapi-service';

export const getRecipes = async () => {
  try{
    return await API.get(`${BASE_URL}/recipes`).then( 
      response => {
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const getOwnRecipesByUserId = async (props) => {
  try{
    return await API.get(`${BASE_URL}/recipes?cratedByUserId=${props.userId}`).then( 
      response => {
        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}

export const getFavoriteRecipesByUserId = async (props) => {
  try{
    return await API.get(`${BASE_URL}/recipes?favoritedByUsersId=${props.userId}`).then( 

      
      response => {
        

        let a = response.data;

        console.log(a);

        let x = a.filter(function (z) {
          return z != undefined;
        });

        console.log("lista filtrada");
        console.log(x);

        return { success: true, data: response.data };
      },
      error =>{
        console.log(error);
        return { success: false, data: response.data };
      }
    );
  }catch(error){
    console.log("Erro interno. " + error);
    return null;
  }
}