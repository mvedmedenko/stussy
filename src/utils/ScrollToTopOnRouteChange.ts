import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unlisten = navigate(location.pathname);

    window.scrollTo(0, 0); 

    return unlisten; 
  }, [navigate, location]);

  return null;
};

export default ScrollToTopOnRouteChange;

