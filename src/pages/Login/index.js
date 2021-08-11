import React, {useState} from 'react';
import {useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import useForm from '../../hooks/useForm';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import LoginRepository from '../../repositories/login';
import { string } from 'prop-types';
import './index.css';

function Login() {
  const [state, setState] = useState([]);
    const valoresIniciais = {
      email: '',
      senha: '',
    };
  const history = useHistory();
  const { handleChange, values } = useForm(valoresIniciais);

  return (
      <PageDefault>
      <h1>Login</h1>
      {state.error && <h3>{state.error}</h3>}
         <form onSubmit={(event) => {
           event.preventDefault();
           setState({error: ''})
           // alert('Video Cadastrado com sucesso!!!1!');
              LoginRepository.create({
                usuario: values.usuario,
                senha: values.senha,
              })
                .then(() => {
                  console.log('Cadastrou com sucesso!');
                  history.push('/');
                })
                .catch((err) => {
                  setState({error: 'usuario ou senha invalidos'})
                });
         }}
         >

      
        <FormField
          label="Usuario"
          name="usuario"
          required="true"
          value={values.usuario}
          onChange={handleChange}
        />

        <FormField
          label="Senha"
          name="senha"
          type="password"
          value={values.senha}
          onChange={handleChange}
        />

        <Button type="submit">
          Entrar
        </Button>
      </form>

      <br />
      <br />
    </PageDefault>
  );
}

export default Login;
