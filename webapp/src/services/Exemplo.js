import axios from 'axios';


class Exemplo {
  instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {'Access-Control-Allow-Origin': '*'}
  });

  getExemplo(){
    return this.instance.get('exemplo');
  }

}

export default Exemplo;