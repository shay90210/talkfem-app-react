import NavigationBar from '../src/components/NavigationBar';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

import HomePage from '../src/pages/HomePage';
import PodcastPage from '../src/pages/PodcastPage';
import ContactPage from '../src/pages/ContactPage';

function App() {
  return (
    <div 
      className="App"
      style={{ backgroundColor: '#680747' }}
    >
      <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/podcast' element={<PodcastPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
