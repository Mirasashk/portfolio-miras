import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/ErrorPage';
import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import BlogsPage from '../pages/BlogsPage';
import BlogPage from '../pages/BlogPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import ResumePage from '../pages/ResumePage';

const publicRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/blogs',
        element: <BlogsPage />,
      },
      {
        path: 'blogs/:blogId',
        element: <BlogPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectPage />,
      },
    ],
  },
]);

export default publicRouter;
