import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToHashTarget } from '../utils/scroll';

export default function HashScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      scrollToHashTarget(location.hash);
      return;
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location]);

  return null;
}
