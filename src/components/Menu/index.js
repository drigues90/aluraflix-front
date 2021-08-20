import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu(props) {
  const isLoggedIn = props.isLoggedIn;
  let button;
  if(isLoggedIn){
   button = <Button as={Link} className="ButtonLink" to="/cadastro/video">
      Novo vídeo
   </Button>
 }else{
   button = <Button as={Link} className="ButtonLink" to="/login">
     Login
   </Button>
 }

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>
      {button}
    </nav>
  );
}

export default Menu;