import axios from 'axios';
import { pathBase } from '../../const';

axios.defaults.baseURL = pathBase;

//catalog

export async function getData(signal) {
  const { data } = await axios.get(`${pathCatalog.CATALOG}`, { signal });
  return data;
}
