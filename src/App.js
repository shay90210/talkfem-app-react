import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import AboutPage from '../src/pages/AboutPage';
import PodcastPage from '../src/pages/PodcastPage';
import ContactPage from '../src/pages/ContactPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='podcast' element={<PodcastPage />}/>
          <Route path='contact' element={<ContactPage />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
