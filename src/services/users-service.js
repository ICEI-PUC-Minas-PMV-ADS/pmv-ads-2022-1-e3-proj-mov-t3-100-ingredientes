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

export const getUserById = async (props) => {
  try{
    return await API.get(`${BASE_URL}/users?id=${props.userId}`).then( 
      response => {
        if(response.data == null || response.data == undefined || response.data.length == 0){
          console.log('User not found');
          return { success: false, data: 'NotFound' };
        }

        return { success: true, data: response.data[0] };
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