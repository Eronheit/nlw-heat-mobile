import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://100.64.156.236:4000'
});