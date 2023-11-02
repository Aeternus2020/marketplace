import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { closeFormReg } from '../../redux/slices/modalRegSlice';
import AnimationCircle from '../Circles';
import animalsLogin from '../../images/login/animals_login.svg';
import {
  FacebookIcon,
  GoogleIcon,
  LoginErrorIcon,
  PasswordErrorIcon,
  PasswordInputIcon2,
  PasswordInputIcon1,
  LoginInputIcon,
  Foot,
} from '../../images/login/icons';
import { openFormLogin } from '../../redux/slices/modalLoginSlice';
import validationSchema from './validation';

const Registration: React.FC = () => {
  const dispatch = useDispatch();
  const modalRegRef = useRef<HTMLDivElement | null>(null);
  const [showPasswordFirst, setShowPasswordFirst] = useState(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalRegRef.current &&
      event.target instanceof Node &&
      !modalRegRef.current.contains(event.target)
    ) {
      dispatch(closeFormReg());
    }
  };

  const openLogin = () => {
    dispatch(closeFormReg());
    dispatch(openFormLogin());
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      passwordFirst: '',
      passwordSecond: '',
    },
    validationSchema,
    onSubmit: ({ email, passwordFirst, passwordSecond }) => {
      console.log(email, passwordFirst, passwordSecond);
      //   dispatch(login({ loginOrEmail, passwordFirst, passwordSecond }));
    },
  });

  return (
    <div className="login" ref={modalRegRef}>
      <div className="login__main">
        <img
          src={animalsLogin}
          alt="Hello"
          loading="lazy"
          className="login__animals-hello"
        />
        <AnimationCircle maxWidth={360} maxHeight={570} className="small" />
      </div>
      <button
        className="close close__login"
        type="button"
        onClick={() => dispatch(closeFormReg())}>
        &#215;
      </button>
      <div className="login__form-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="login__title">Create an account </h3>
          <div>
            <div style={{ maxHeight: '40px', marginBottom: '12px' }}>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <div className="login__password-icons login__svg">
                <LoginInputIcon />
              </div>
            </div>
            <div style={{ maxHeight: '40px', marginBottom: '12px' }}>
              <input
                type={showPasswordFirst ? 'text' : 'password'}
                id="passwordFirst"
                name="passwordFirst"
                onBlur={formik.handleBlur}
                value={formik.values.passwordFirst}
                onChange={formik.handleChange}
                placeholder="Password"
              />
              <div>
                {showPasswordFirst ? (
                  <button
                    type="button"
                    className="login__password-icons"
                    onClick={() => setShowPasswordFirst(false)}>
                    <PasswordInputIcon1 />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="login__password-icons"
                    onClick={() => setShowPasswordFirst(true)}>
                    <PasswordInputIcon2 />
                  </button>
                )}
              </div>
            </div>
            <span className="repeat_password">Repeat your password</span>
            <div style={{ maxHeight: '40px', marginBottom: '12px' }}>
              <input
                type={showPasswordSecond ? 'text' : 'password'}
                id="passwordSecond"
                name="passwordSecond"
                onBlur={formik.handleBlur}
                value={formik.values.passwordSecond}
                onChange={formik.handleChange}
                placeholder="Password"
              />
              <div>
                {showPasswordSecond ? (
                  <button
                    type="button"
                    className="login__password-icons"
                    onClick={() => setShowPasswordSecond(false)}>
                    <PasswordInputIcon1 />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="login__password-icons"
                    onClick={() => setShowPasswordSecond(true)}>
                    <PasswordInputIcon2 />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            {formik.touched.email && formik.errors.email && (
              <p className="login__errors">
                <LoginErrorIcon />
                {': '}
                {formik.errors.email}
              </p>
            )}
            {((formik.touched.passwordFirst && formik.errors.passwordFirst) ||
              (formik.touched.passwordSecond &&
                formik.errors.passwordSecond)) && (
              <p className="password__errors">
                <PasswordErrorIcon />
                {': '}
                {formik.errors.passwordFirst || formik.errors.passwordSecond}
              </p>
            )}
          </div>
          <button type="submit" className="login__submit_button">
            Register
          </button>
        </form>
        <div className="login__or">
          <div style={{ textDecoration: 'line-through' }}>
            ---------------------------
          </div>
          <span style={{ fontSize: '12px' }}>or</span>
          <div style={{ textDecoration: 'line-through' }}>
            ---------------------------
          </div>
        </div>
        <button type="button" className="login__sign_social_button">
          <GoogleIcon />
          Log in with Google
        </button>
        <button type="button" className="login__sign_social_button">
          <FacebookIcon />
          Log in with Facebook
        </button>
        <div className="login__register-link">
          Back to{' '}
          <button
            type="button"
            onClick={() => openLogin()}
            className="login__register-link-button">
            Login <Foot />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
