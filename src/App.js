import React from 'react';
import { Route ,BrowserRouter ,Link } from 'react-router-dom';

import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";


const openMenu =()=> {
  document.querySelector(".sidebar").classList.add("open"); 
}

const closeMenu = ()=>{
  document.querySelector(".sidebar").classList.remove("open");
}

function App() {

return (
    <BrowserRouter>

    <div class="grid-container">
        <header class="header">
            <div class="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button> 
                <a href="index.html">Amazona</a>
            </div>
            <div class="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Signin</a>
            </div>
        </header>
        <aside class="sidebar">
            <h3> Shopping Categories</h3>
            <button class="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>

        </aside>
        <main className="main">
            <div className="content">
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/" exact={true} component={HomeScreen} />
            </div>
            </main>
        <footer class="footer">
            All right reserved
        </footer>
    
    </div>
    </BrowserRouter>
);
}

export default App;
