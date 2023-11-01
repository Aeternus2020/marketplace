/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { closeForm } from '../../redux/slices/modalLoginSlice';
import AnimationCircle from '../Circles';
import animalsLogin from '../../images/login/animals_login.svg';
import validationSchema from './validation';

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
      dispatch(closeForm());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      loginOrEmail: '',
      password: '',
    },
    validationSchema,
    onSubmit: ({ loginOrEmail, password }) => {
      console.log(loginOrEmail, password);
      // dispatch(login({ loginOrEmail, password }));
    },
  });

  return (
    <div className="login" ref={modalLoginRef}>
      <div className="login_main">
        <img
          src={animalsLogin}
          alt="Hello"
          loading="lazy"
          className="animals_hello"
        />
        <AnimationCircle maxWidth={360} maxHeight={570} className="small" />
      </div>
      <button
        className="close close_login"
        type="button"
        onClick={() => dispatch(closeForm())}>
        &#215;
      </button>
      <div className="form_wrapper">
        <form onSubmit={formik.handleSubmit}>
          <h3 className="login_title">Hello, Pet Lover&#33; Sign In</h3>
          <div>
            <div style={{ maxHeight: '40px', marginBottom: '12px' }}>
              <input
                type="text"
                id="loginOrEmail"
                name="loginOrEmail"
                placeholder="Email"
                onBlur={formik.handleBlur}
                value={formik.values.loginOrEmail}
                onChange={formik.handleChange}
              />
              <div className="password-icons login_svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none">
                  <path
                    d="M4.46447 15.4645C5.40215 14.5268 6.67392 14 8 14H16C17.3261 14 18.5979 14.5268 19.5355 15.4645C20.4732 16.4021 21 17.6739 21 19V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21V19C19 18.2044 18.6839 17.4413 18.1213 16.8787C17.5587 16.3161 16.7956 16 16 16H8C7.20435 16 6.44129 16.3161 5.87868 16.8787C5.31607 17.4413 5 18.2043 5 19V21C5 21.5523 4.55228 22 4 22C3.44772 22 3 21.5523 3 21V19C3 17.6739 3.52678 16.4021 4.46447 15.4645Z"
                    fill="#C4BFCD"
                  />
                  <path
                    d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"
                    fill="#C4BFCD"
                  />
                </svg>
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
                    className="password-icons"
                    onClick={() => setShowPassword(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9E9FA1">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="password-icons"
                    onClick={() => setShowPassword(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z"
                        fill="#C4BFCD"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z"
                        fill="#C4BFCD"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            {formik.touched.loginOrEmail && formik.errors.loginOrEmail && (
              <p className="login_errors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <path
                    d="m2.6 9c0.6-0.5 1.3-0.8 2.1-0.8h4.6c0.8 0 1.5 0.3 2.1 0.8 0.5 0.6 0.9 1.3 0.9 2.1v1.1c0 0.4-0.3 0.6-0.6 0.6-0.4 0-0.6-0.2-0.6-0.6v-1.1c0-0.5-0.2-0.9-0.5-1.3-0.4-0.3-0.8-0.5-1.3-0.5h-4.6c-0.5 0-0.9 0.2-1.3 0.5-0.3 0.4-0.5 0.8-0.5 1.3v1.1c0 0.4-0.2 0.6-0.6 0.6-0.3 0-0.6-0.2-0.6-0.6v-1.1c0-0.8 0.4-1.5 0.9-2.1z"
                    fill="#EB5757"
                  />
                  <path
                    d="m7 7c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9zm1.8-2.9c-0.1-1-0.8-1.8-1.8-1.8-1 0-1.8 0.8-1.8 1.8 0.1 1 0.8 1.7 1.8 1.7 1 0 1.8-0.7 1.8-1.7z"
                    fill="#EB5757"
                  />
                </svg>
                {': '}
                {formik.errors.loginOrEmail}
              </p>
            )}
            {formik.touched.password && formik.errors.password && (
              <p className="password_errors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m1.2 7.8c0-1.1 0.9-2 2-2h7.6c1.1 0 2 0.9 2 2v3.6c0 1.1-0.9 2-2 2h-7.6c-1.1 0-2-0.9-2-2zm1.1 3.4c0 0.6 0.5 1 1 1h7.4c0.5 0 1-0.4 1-1v-3.2c0-0.6-0.5-1-1-1h-7.4c-0.5 0-1 0.4-1 1z"
                    fill="#EB5757"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="m7 1.8c-0.6-0.1-1.2 0.2-1.6 0.6-0.5 0.5-0.7 1.1-0.7 1.7v2.3c0 0.3-0.3 0.6-0.6 0.6-0.3 0-0.6-0.3-0.6-0.6v-2.3c0-0.9 0.4-1.8 1-2.5 0.7-0.6 1.6-1 2.5-1 0.9 0 1.8 0.4 2.5 1 0.6 0.7 1 1.6 1 2.5v2.3c0 0.3-0.3 0.6-0.6 0.6-0.3 0-0.6-0.3-0.6-0.6v-2.3c0-0.6-0.2-1.2-0.7-1.7-0.4-0.4-1-0.7-1.6-0.7z"
                    fill="#EB5757"
                  />
                </svg>
                {': '}
                {formik.errors.password}
              </p>
            )}
          </div>
          <button type="submit" className="login_submit_button">
            Login In
          </button>
        </form>
        <button type="button" className="forgot_link">
          Forgot your password?
        </button>
        <div className="or">
          <div style={{ textDecoration: 'line-through' }}>
            ---------------------------
          </div>
          <span style={{ fontSize: '12px' }}>or</span>
          <div style={{ textDecoration: 'line-through' }}>
            ---------------------------
          </div>
        </div>
        <button type="button" className="sign_social_button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
              fill="#FFC107"
            />
            <path
              d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
              fill="#FF3D00"
            />
            <path
              d="M12.0002 22.0001C14.5832 22.0001 16.9302 21.0116 18.7047 19.4041L15.6097 16.7851C14.5719 17.5743 13.3039 18.0011 12.0002 18.0001C9.39916 18.0001 7.19066 16.3416 6.35866 14.0271L3.09766 16.5396C4.75266 19.7781 8.11366 22.0001 12.0002 22.0001Z"
              fill="#4CAF50"
            />
            <path
              d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
              fill="#1976D2"
            />
          </svg>
          Log in with Google
        </button>
        <button type="button" className="sign_social_button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <g clipPath="url(#clip0_331_851)">
              <path
                d="M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37253 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6575 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3398 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z"
                fill="#1877F2"
              />
              <path
                d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_331_851">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Log in with Facebook
        </button>
        <div className="login_registerLink">
          Don&#180;t have an account yet?{' '}
          <button
            type="button"
            onClick={() => dispatch(closeForm())}
            className="login_registerLink_button">
            Register here{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <ellipse cx="10.5" cy="3.75" rx="2" ry="2.75" fill="#AFDFD8" />
              <ellipse cx="6" cy="3.75" rx="2" ry="2.75" fill="#EFBE20" />
              <ellipse
                cx="2.69393"
                cy="6.73296"
                rx="1.67611"
                ry="2.2747"
                transform="rotate(-23.4922 2.69393 6.73296)"
                fill="#F6969A"
              />
              <ellipse
                cx="13.7702"
                cy="6.69759"
                rx="1.67611"
                ry="2.2747"
                transform="rotate(20.6074 13.7702 6.69759)"
                fill="#91D3E9"
              />
              <path
                d="M11.0072 7.79597C8.78594 5.90162 6.37961 7.00666 5.4541 7.79597C4.30762 8.8568 3.66278 10.2586 3.48366 10.8269C3.24482 11.5846 2.98209 13.2517 3.84192 13.8579C4.70175 14.4641 7.06623 14.0473 7.51411 13.8579C7.96198 13.6684 8.49938 13.6684 8.94716 13.8579C9.39494 14.0473 10.2906 14.3125 11.3654 14.2367C12.4402 14.161 12.888 13.7631 13.1567 13.1001C13.4255 12.4371 13.2284 9.69031 11.0072 7.79597Z"
                fill="#C9C9FF"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
