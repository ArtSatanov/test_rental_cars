import axios from 'axios';

axios.defaults.baseURL = pathBase.pathCatalog;

//catalog

export async function getData(signal) {
  const { data } = await axios.get(`${pathCatalog}`, { signal });
  return data;
}
