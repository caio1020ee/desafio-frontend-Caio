import axios from 'axios';

const api = axios.create({
  baseURL: '//homologacao3.azapfy.com.br/api/ps/metahumans',
});

export default api;
