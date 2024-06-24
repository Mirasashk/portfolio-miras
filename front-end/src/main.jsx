import React from 'react';
import ReactDOM from 'react-dom/client';
import publicRouter from './routes/PublicRoutes';
import './index.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={publicRouter} />
  </React.StrictMode>
);
