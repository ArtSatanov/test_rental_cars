import axios from 'axios';
import { pathBase, pathCatalog } from 'const';

axios.defaults.baseURL = pathBase.BASEURL;

//catalog

export async function getData(signal) {
  const { data } = await axios.get(`${pathCatalog.CATALOG}`, { signal });
  return data;
}
