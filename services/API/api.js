import axios from 'axios';

axios.defaults.baseURL = pathBase;

//catalog

export async function getData(signal) {
  const { data } = await axios.get(`${pathCatalog.CA}`, { signal });
  return data;
}
