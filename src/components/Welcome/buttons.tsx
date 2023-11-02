import React from 'react';
import { useDispatch } from 'react-redux';
import { closeFormWelcome } from '../../redux/slices/modalWelcomeSlice';
import { openFormLogin } from '../../redux/slices/modalLoginSlice';

interface ButtonProps {
  typeUser: string;
}

const ButtonSellerCustomer: React.FC<ButtonProps> = ({ typeUser }) => {
  const dispatch = useDispatch();

  const openLogin = () => {
    dispatch(closeFormWelcome());
    dispatch(openFormLogin());
  };

  return (
    <div className={`${typeUser}_wrapper_button`}>
      <button
        type="button"
        className={`${typeUser}_button`}
        onClick={() => openLogin()}>
        {typeUser}?
      </button>
    </div>
  );
};

export default ButtonSellerCustomer;
