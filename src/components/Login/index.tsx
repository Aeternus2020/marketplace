import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeForm } from '../../redux/slices/modalLoginSlice';
import AnimationCircle from '../Circles';
import animalsLogin from '../../images/login/animals_login.svg';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const modalLoginRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalLoginRef.current &&
      event.target instanceof Node &&
      !modalLoginRef.current.contains(event.target)
    ) {
      dispatch(closeForm());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="login" ref={modalLoginRef}>
      <div className="login__main">
        <h3>Hello, Pet Lover&#33; Sign login</h3>
        <img
          src={animalsLogin}
          alt="Welcome"
          loading="lazy"
          className="animals_hello"
        />
      </div>
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