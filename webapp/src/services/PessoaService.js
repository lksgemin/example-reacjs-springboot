import axios from 'axios';

class PessoaService {

  getPessoas() {
    const instance = axios.create({
      baseURL: 'http://localhost:8080/api/',
      headers: { 'Access-Control-Allow-Origin': '*' }
    });

    return instance.get('pessoas');
  }
}

export default PessoaService;