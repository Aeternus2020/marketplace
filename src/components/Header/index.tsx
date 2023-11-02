import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Welcome from '../Welcome';
import logButton from '../../images/login/user_button.svg';
import '../../styles/login.sass';
import { openFormWelcome } from '../../redux/slices/modalWelcomeSlice';
import { RootState } from '../../redux/store';
import Login from '../Login';
import Registration from '../Registration';

const Header: React.FC = () => {
  const modalWelcome = useSelector(
    (state: RootState) => state.modalWelcome.statusWelcome,
  );
  const modalLogin = useSelector(
    (state: RootState) => state.modalLogin.statusLogin,
  );
  const modalRegistration = useSelector(
    (state: RootState) => state.modalRegistration.statusRegistration,
  );
  const dispatch = useDispatch();

  return (
    <header>
      I&lsquo;m Header
      <button
        type="button"
        className="user_login"
        onClick={() => dispatch(openFormWelcome())}>
        <img src={logButton} alt="LogButton" loading="lazy" />
      </button>
      {modalWelcome && <Welcome />}
      {modalLogin && <Login />}
      {modalRegistration && <Registration />}
    </header>
  );
};

export default Header;
