import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Book from './pages/Book';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Index />}> */}
        <Route index element={<Index />} />
        <Route path="book" element={<Book />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
