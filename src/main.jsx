import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WebDev, WebDesign, Graphics } from './projects_pages'
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/web_development_projects',
    element: <WebDev />,
  },
  {
    path: '/web_design_projects',
    element: <WebDesign />,
  },
  {
    path: '/graphics_design_projects',
    element: <Graphics />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
