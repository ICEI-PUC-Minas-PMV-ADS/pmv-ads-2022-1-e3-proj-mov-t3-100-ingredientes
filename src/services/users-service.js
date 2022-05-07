import API, {BASE_URL} from './webapi-service';

var errorMessage = '';

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

export const deleteUser = async (props) => {
  try{
      return await API.delete(`${BASE_URL}/users/${props.id}`).then(
          response => {
              return {success: true, data: response.data};
          },
          error => {
              return {success: false, data: error};
          }
      )
  }catch(error){
      console.log("Erro interno. " + error);
      return null;
  }
}

export const updateUser = async (params) => {
  let dataUserUpdated = {};
  dataUserUpdated.id = params.id;
  dataUserUpdated.name = params.name;
  dataUserUpdated.email = params.email;

  if(!validateUpdate(params)) 
    return { success: false, data: errorMessage};

  if(!valideGeneral(params))
    return { success: false, data: errorMessage};

  if(params.password.length >= 6){
    dataUserUpdated.password = params.password;
  }

  try{
      return await API.patch(`${BASE_URL}/users/${params.id}`, dataUserUpdated).then(
          response => {
              return {success: true, data: response.data};
          },
          error => {
              return {success: false, data: error};
          }
      )
  }catch(error){
      console.log("Erro interno. " + error);
      return null;
  }
}

const valideGeneral = (user) => {
  if(user.password.length == 0){
    errorMessage = 'Insira a senha';
    return false;
  }

  if(user.password.length < 6){
    errorMessage = 'Senha deve ter ao menos 6 caracteres';
    return false;
  }

  errorMessage = '';
  return true;
}

const validateUpdate = (user) => {
  if(user.password != user.passwordConfirm){
    errorMessage = 'Senhas não coincidem';
    return false;
  }
  
  errorMessage = '';
  return true;
}