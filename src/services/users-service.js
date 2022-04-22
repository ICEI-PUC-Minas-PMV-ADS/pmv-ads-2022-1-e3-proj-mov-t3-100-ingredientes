import API, {BASE_URL} from './webapi-service';

export const getUsers = async () => {
  try{
    return await API.get(`${BASE_URL}/users`).then( 
      response => {
        console.log(response.data);
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