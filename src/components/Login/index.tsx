/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { closeFormLogin } from '../../redux/slices/modalLoginSlice';
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
import validationSchema from './validation';
import { openFormReg } from '../../redux/slices/modalRegSlice';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const modalLoginRef = useRef<HTMLDivElement | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalLoginRef.current &&
      event.target instanceof Node &&
      !modalLoginRef.current.contains(event.target)
    ) {
      dispatch(closeFormLogin());
    }
  };

  const openReg = () => {
    dispatch(closeFormLogin());
    dispatch(openFormReg());
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
      password: '',
    },
    validationSchema,
    onSubmit: ({ email, password }) => {
      console.log(email, password);
      // dispatch(login({ loginOrEmail, password }));
    },
  });

  return (
    <div className="login" ref={modalLoginRef}>
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
        onClick={() => dispatch(closeFormLogin())}>
        &#215;
      </button>
      <div className="login__form-wrapper">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="login__title">Hello, Pet Lover&#33; Sign In</h3>
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
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
              />
              <div>
                {showPassword ? (
                  <button
                    type="button"
                    className="login__password-icons"
                    onClick={() => setShowPassword(false)}>
                    <PasswordInputIcon1 />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="login__password-icons"
                    onClick={() => setShowPassword(true)}>
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
            {formik.touched.password && formik.errors.password && (
              <p className="password__errors">
                <PasswordErrorIcon />
                {': '}
                {formik.errors.password}
              </p>
            )}
          </div>
          <button type="submit" className="login__submit_button">
            Log In
          </button>
        </form>
        <button type="button" className="login__forgot_link">
          Forgot your password?
        </button>
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
          Don&#180;t have an account yet?{' '}
          <button
            type="button"
            onClick={() => openReg()}
            className="login__register-link-button">
            Register here <Foot />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
