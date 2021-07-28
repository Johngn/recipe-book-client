import axios from 'axios';

export async function listRecipes() {
  return await axios(`${process.env.REACT_APP_API_URL}`);
}
