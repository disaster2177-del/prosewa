import { useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MobileContactBar from './components/MobileContactBar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import ConfigNotice from './components/ConfigNotice.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <ConfigNotice />
      <Header />
      <main id="main" tabIndex={-1}>
        {/* key on pathname replays the fade-in on every page change */}
        <div className="page-fade" key={pathname}>
          <AppRoutes />
        </div>
      </main>
      <Footer />
      <MobileContactBar />
    </>
  );
}
