/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import store from './redux/store';
// import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Routes>
            <Route path="/" element={<Main />} />
          </Routes> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
