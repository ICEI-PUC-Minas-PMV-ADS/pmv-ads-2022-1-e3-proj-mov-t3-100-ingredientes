import API, {BASE_URL} from './webapi-service';

export const register = async (params) => {
    try{
        return await API.post(`${BASE_URL}/users`, params).then(
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