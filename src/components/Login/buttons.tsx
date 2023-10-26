import React from 'react';
// import '../../styles/login.sass';
interface ButtonProps {
  typeUser: string;
}

const ButtonSellerCustomer: React.FC<ButtonProps> = ({ typeUser }) => (
  <div className={`${typeUser}_wrapper_button`}>
    <button type="button" className={`${typeUser}_button`}>
      {typeUser}?
    </button>
  </div>
);

export default ButtonSellerCustomer;
