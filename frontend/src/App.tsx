import React from 'react';
import logo from './logo.svg';
import './App.css';
const openMenu = () => {
  document.querySelector(".sidebar")?.classList.add("open");

}
const closeMenu = () => {
  document.querySelector(".sidebar")?.classList.remove("open");
  
}
function App() {
  return (
    <div className="grid-container">
    <header className="header">
        <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Dev Tech Solutions</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
    </header>

    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Pants</a>
            </li>
            <li>
                <a href="index.html">Shirts</a>
            </li>
        </ul>
   </aside>

   <main>
    <div className="content">
        <ul className="products">
            <li>
                
                <div className="products">
                    <img className="product-image" src="images/d1.jpg" alt="product" />
                    <ul>
                    <li><div className="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div></li>
                    <li> <div className="product-brand">Nike</div> </li>
                    <li> <div className="product-price">$60</div> </li>
                    <li> <div className="product-rating">4.5 Stars (10 Reviews)</div> </li>

                   </ul>
                </div>
               
            </li>
            <li>
                <div className="products">
                    <img className="product-image" src="images/d1.jpg" alt="product" />
                    <ul>
                    <li><div className="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div></li>
                    <li> <div className="product-brand">Nike</div> </li>
                    <li> <div className="product-price">$60</div> </li>
                    <li> <div className="product-rating">4.5 Stars (10 Reviews)</div> </li>

                   </ul>
                </div>
            </li>
            <li>
                <div className="products">
                    <img className="product-image" src="images/d1.jpg" alt="product" />
                    <ul>
                    <li><div className="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div></li>
                    <li> <div className="product-brand">Nike</div> </li>
                    <li> <div className="product-price">$60</div> </li>
                    <li> <div className="product-rating">4.5 Stars (10 Reviews)</div> </li>

                   </ul>
                </div>
            </li>
            <li>
                <div className="products">
                    <img className="product-image" src="images/d1.jpg" alt="product" />
                    <ul>
                    <li><div className="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div></li>
                    <li> <div className="product-brand">Nike</div> </li>
                    <li> <div className="product-price">$60</div> </li>
                    <li> <div className="product-rating">4.5 Stars (10 Reviews)</div> </li>

                   </ul>
                </div>
            </li>
            <li>
                <div className="products">
                    <img className="product-image" src="images/d1.jpg" alt="product" />
                    <ul>
                    <li><div className="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div></li>
                    <li> <div className="product-brand">Nike</div> </li>
                    <li> <div className="product-price">$60</div> </li>
                    <li> <div className="product-rating">4.5 Stars (10 Reviews)</div> </li>

                   </ul>
                </div>
            </li>
            <li>
                <div className="products">
                    <img className="product-image" src="images/d1.jpg" alt="product" />
                    <ul>
                    <li><div className="product-name">
                        <a href="product.html">Slim Shirt</a>
                    </div></li>
                    <li> <div className="product-brand">Nike</div> </li>
                    <li> <div className="product-price">$60</div> </li>
                    <li> <div className="product-rating">4.5 Stars (10 Reviews)</div> </li>

                   </ul>
                </div>
            </li>
        </ul>

    </div>
   
   </main>
<footer> 
    &copy; 2024 Dev Tech Solutions 
</footer>
    
</div>
  );
}

export default App;
