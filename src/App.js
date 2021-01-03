import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/" >Architecture Design</Link>
          </div>
          <div className="header-links">
              <a href="cart.html">Cart</a>
              <Link to="/signin">Sign in</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
              <li><a href="index.html">Product 1</a></li>
              <li><a href="index.html">Product 2</a></li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>  
        </main>
        <footer className="footer">
          By our team @2021
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
