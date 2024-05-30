// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3 porfilio-app">
        <Outlet />
        <footer className="footer-content">
        <Footer />
        </footer>
      </main>
    </>
    
  );
}

export default App;
