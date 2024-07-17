import ReactDOM from 'react-dom/client';
import publicRouter from './routes/PublicRoutes';
import './index.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={publicRouter} />
);
