import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import PodcastPage from '../src/pages/PodcastPage';
import ContactPage from '../src/pages/ContactPage';
import NavigationBar from '../src/components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='podcast' element={<PodcastPage />}/>
        <Route path='contact' element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
