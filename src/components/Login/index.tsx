import React from 'react';
import { useDispatch } from 'react-redux';
import { closeForm } from '../../redux/slices/modalLoginSlice';
import animalsHello from '../../images/login/animals_hello.svg';
import AnimationCircle from '../Circles';
import Seller from './buttons/Seller';
import Customer from './buttons/Customer';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="login-hello">
      <div className="login-hello__main">
        <h3>Welcome! Let &#180;s get started</h3>
        <span>Click on the button to proceed</span>
        <img
          src={animalsHello}
          alt="Welcome"
          loading="lazy"
          className="animals_hello"
        />
      </div>
      <Seller />
      <Customer />
      <button
        className="close"
        type="button"
        onClick={() => dispatch(closeForm())}>
        &#215;
      </button>
      <AnimationCircle />
    </div>
  );
};

export default Login;
