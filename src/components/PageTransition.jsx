import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children, isDark }) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState('enter');

  // Route change → animated transition
  useEffect(() => {
    setStage('exit');
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setStage('enter');
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Theme change → instant update (no animation)
  useEffect(() => {
    setDisplayChildren(children);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <div className={`page-transition stage-${stage}`}>
      {displayChildren}
    </div>
  );
};

export default PageTransition;
