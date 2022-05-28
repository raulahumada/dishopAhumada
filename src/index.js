import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC-b4ncbZ0gtmluIbg25G-YQvR25XVOBnQ',
  authDomain: 'dishop-ahumad.firebaseapp.com',
  projectId: 'dishop-ahumad',
  storageBucket: 'dishop-ahumad.appspot.com',
  messagingSenderId: '531559097180',
  appId: '1:531559097180:web:cde3fd1d65cfcae8541799',
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
