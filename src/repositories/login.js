import config from '../config';

const URL_LOGIN = `${config.URL_BACKEND_TOP}/login`;

function create(dadosLogin) {
  return fetch(`${URL_LOGIN}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dadosLogin),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possivel entrar no sistema :(');
    });
}

export default {
  create,
};
