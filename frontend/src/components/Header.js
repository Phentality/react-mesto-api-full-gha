import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoPath from '../images/logo.svg'


function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    localStorage.removeItem('email');
    navigate('/signin', { replace: true });
  }
  function toSignIn() {
    navigate('/signin', { replace: true });
  }
  function toSignUp() {
    navigate('/signup', { replace: true });
  }

  function handleNav() {
    if (location.pathname === '/signin') {
      return (<button onClick={toSignUp} className='header__button'>Зарегистрироваться</button>)
    }
    if (location.pathname === '/signup') {
      return (<button onClick={toSignIn} className='header__button'>Войти</button>)
    }
    else {
      return (
        <div className='header__container'>
          <p className='header__text'>{props.email}</p>
          <button onClick={signOut} className='header__button'>Выйти</button>
        </div>
      )
    }
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="Лого" />
      {handleNav()}
    </header>)
}

export default Header;