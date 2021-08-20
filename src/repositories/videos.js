import api from '../services/api'

async function create(objetoDoVideo) {
  const response = await api.post("/videos", objetoDoVideo)
  try {
    return response.data;
  } catch (error) {
      throw new Error('Não foi possivel processar sua requisicao:(');
  }
}

export default {
  create,
};
