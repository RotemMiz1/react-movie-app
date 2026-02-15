
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Page404 from './pages/Page404';
import MovieInfo from './pages/MovieInfo';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
