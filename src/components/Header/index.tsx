import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../Login';
import logButton from '../../images/login/user_button.svg';
import '../../styles/login.sass';
import { openForm } from '../../redux/slices/modalLoginSlice';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const modalLogin = useSelector(
    (state: RootState) => state.modalLogin.statusLogin,
  );
  const dispatch = useDispatch();

  return (
    <header>
      I&lsquo;m Header
      <button
        type="button"
        className="user_login"
        onClick={() => dispatch(openForm())}>
        <img src={logButton} alt="LogButton" loading="lazy" />
      </button>
      {modalLogin && <Login />}
    </header>
  );
};

export default Header;
