import {login} from '../services/auth'
import api from '../services/api'

async function create(dadosLogin) {
  const response = await api.post("/login", dadosLogin)
  try {
    login(response.data.token);
    return response;
  } catch (error) {
      throw new Error('Não foi possivel entrar no sistema :(');
  }
}

export default {
  create,
};
