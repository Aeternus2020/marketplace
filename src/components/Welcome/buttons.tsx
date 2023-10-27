import React from 'react';
import { useDispatch } from 'react-redux';
import { closeForm } from '../../redux/slices/modalWelcomeSlice';
import { openForm } from '../../redux/slices/modalLoginSlice';

interface ButtonProps {
  typeUser: string;
}

const ButtonSellerCustomer: React.FC<ButtonProps> = ({ typeUser }) => {
  const dispatch = useDispatch();

  const openLogin = () => {
    dispatch(closeForm());
    dispatch(openForm());
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
