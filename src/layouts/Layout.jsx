import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FloatingButtons from '../components/FloatingButtons.jsx';

export default function Layout() {
  return (
    <div className="min-h-screen bg-night text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
