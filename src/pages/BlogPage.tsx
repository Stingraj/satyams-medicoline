import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FAQ from '../components/FAQ';

export default function BlogPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-[72px] lg:pt-[104px]">
      <FAQ />
    </div>
  );
}
