import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeForm } from '../../redux/slices/modalWelcomeSlice';
import animalsHello from '../../images/login/animals_hello.svg';
import AnimationCircle from '../Circles';
import ButtonSellerCustomer from './buttons';

const Welcome: React.FC = () => {
  const dispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRef.current &&
      event.target instanceof Node &&
      !modalRef.current.contains(event.target)
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
    <div className="welcome" ref={modalRef}>
      <div className="welcome__main">
        <h3>Welcome! Let &#180;s get started</h3>
        <span>Click on the button to proceed</span>
        <img
          src={animalsHello}
          alt="Welcome"
          loading="lazy"
          className="animals_welcome"
        />
      </div>
      <ButtonSellerCustomer typeUser="Seller" />
      <ButtonSellerCustomer typeUser="Customer" />
      <button
        className="close"
        type="button"
        onClick={() => dispatch(closeForm())}>
        &#215;
      </button>
      <AnimationCircle maxWidth={730} maxHeight={570} className="big" />
    </div>
  );
};

export default Welcome;
