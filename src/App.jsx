import { FaBars, FaJoget, FaSearch, FaTimes } from 'react-icons/fa';
import Contador from './Components/Contador';
import { useRef, useState } from 'react'
import './Styles/app.css'

function App() {

  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <div className="container-landing">
        <div className="menu">
          <div className="logo">
            <FaJoget size={35} />
            Logo
          </div>
            <nav ref={navRef} className="nav-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Parceiros</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                <FaTimes />
              </button>
            </nav>
            <div className="search">
              <FaSearch size={30} />
            </div>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </div>
        <div className="colors">
        <Contador />
        <Contador />
        </div>
    </div>
  );
}

export default App;
