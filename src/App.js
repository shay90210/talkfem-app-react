import NavigationBar from '../src/components/NavigationBar';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

import HomePage from '../src/pages/HomePage';
import ListenLivePage from './pages/ListenLivePage';
import EpisodesPage from './pages/EpisodesPage';
import ContactPage from '../src/pages/ContactPage';

function App() {
  return (
    <div 
      className="App"
      style={{ backgroundColor: '#ffb6c1' }}
    >
      <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/live' element={<ListenLivePage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
