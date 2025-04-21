import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from './Home.js';
import Certificates from './components/Certificates/Certificates.js';
import CertificateView from './components/Certificates/CertificateView.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home />}>
      <Route index element={<App />} />
      <Route path='certificates' element={<Certificates />} />
      <Route path='certificates/:id' element={<CertificateView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);