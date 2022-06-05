# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

Para que seja implementado este sistema, será necessário a alocação de um servidor onde ocorrerá a hospedagem do aplicativo sendo monumentais para serviços de mensageria e notificação, controle de versão, requisisições , controle de tráfego e outros. Conforme detalhado no RF-001, o servidor será responsavél por retornar através de uma requisição do tipo GET para um servidor que será alocado o Back-end, sendo ele, a parte responsável por armazenar dados importantes ao usuário. Este tipo de requisição permite o retorno de informações importantes, por exemplo,nomes de receitas pela semelhança com seu nome e descrição (RF-002), permitindo assim mais agilidade aos processos do software. 

```js
import { Platform } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = Platform.OS == 'web' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';
export const BASE_URL_AUTH = Platform.OS == 'web' ? 'http://localhost:3000/660' : 'http://10.0.2.2:3000/660';

const onRequest = async(config) => {
    const token = await AsyncStorage.getItem('@TOKEN_KEY');
    if(token && token != 'undefined'){
      config.headers.Authorization = `Bearer ${token}`;
    }else{console.log('Chamada sem token')}
    return config;
  }
  
  const setupInterceptorsTo = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest);
    return axiosInstance;
  }
  
  const API = axios.create();
  setupInterceptorsTo(API);
  export default API;

```

|RF-001| A aplicação deverá exibir receitas de forma listada e detalhada. | ALTA |
|RF-002| A aplicação deverá permitir buscar receitas pela semelhança com seu nome e descrição. | ALTA |
|RF-003| A aplicação deverá permitir buscar receitas de acordo com uma lista de ingredientes inserida pelo usuário. | ALTA | 
|RF-004| A aplicação deverá permitir que o usuário insira novas receitas. | MÉDIA |
|RF-005| A aplicação deverá listar as receitas publicadas ao usuário que a publicou. | MÉDIA |
|RF-006| A aplicação deverá permitir o autor de uma receita alterá-la ou deletá-la. | MÉDIA |
|RF-007| A aplicação deverá permitir ordenar e filtrar o resultado da busca. | BAIXA |
|RF-008| A aplicação deverá permitir que as receitas sejam salvas em uma lista de desejos. | BAIXA |
|RF-009| A aplicação deverá permitir avaliar e comentar receitas de outro usuário | BAIXA |
|RF-010| A aplicação deverá notificar o usuário quando alguém interagir com sua receita (avaliação e comentário). | BAIXA |

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)