import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import ProjectContext from './contexts/ProjectsContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjectsThumbnail();
  }, []);

  const getProjectsThumbnail = async () => {
    //http://127.0.0.1:5000/projects/thumbnails
    //https://miras-portfolio-api.web.app/projects/thumbnails
    axios
      .get('http://127.0.0.1:5000/projects/thumbnails')
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar />
      <ProjectContext.Provider value={[projects, setProjects]}>
        <Outlet />
      </ProjectContext.Provider>
      <Footer />
    </>
  );
}

export default App;
