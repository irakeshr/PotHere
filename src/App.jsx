import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Shop from './components/Pages/Shop';  
import './App.css';
import AboutSection from './components/Pages/AboutSection';
import Footer from './components/Footer';
import ProductDetails from './components/Pages/ProductDetails';
import { CartContext } from './context/CartContext';
import CartItems from './components/Pages/CartItems';
import ScrollToTop from './context/ScrollToTop';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2079603238.
 import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cartItems, setCartItems] = useState([]);
  const dummyProducts = [
    {
      id: 1,
      name: 'Terracotta Pot',
      price: 12.99,
      image: '../src/assets/potspng/pot1.png',
       sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 2,
      name: 'Modern White Pot',
      price: 19.99,
      image: '../src/assets/potspng/pot2.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 3,
      name: 'Handcrafted Ceramic',
      price: 24.99,
      image: '../src/assets/potspng/pot3.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 4,
      name: 'Another Terracotta',
      price: 15.50,
      image: '../src/assets/potspng/pot4.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 5,
      name: 'Small Plant Pot',
      price: 9.75,
      image: '../src/assets/potspng/pot3.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 6,
      name: 'Painted Ceramic Pot',
      price: 21.00,
      image: '../src/assets/potspng/pot2.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 7,
      name: 'Terracotta Pot',
      price: 12.99,
      image: '../src/assets/potspng/pot1.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 8,
      name: 'Modern White Pot',
      price: 19.99,
      image: '../src/assets/potspng/pot2.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 9,
      name: 'Handcrafted Ceramic',
      price: 24.99,
      image: '../src/assets/potspng/pot3.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 10,
      name: 'Another Terracotta',
      price: 15.50,
      image: '../src/assets/potspng/pot4.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 11,
      name: 'Small Plant Pot',
      price: 9.75,
      image: '../src/assets/potspng/pot3.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
    {
      id: 12,
      name: 'Painted Ceramic Pot',
      price: 21.00,
      image: '../src/assets/potspng/pot2.png',
      sizes: [
        {
          name: "Small",
          dimensions: "8 inches (20 cm) diameter, 6 inches (15 cm) height"
        },
        {
          name: "Medium",
          dimensions: "10 inches (25 cm) diameter, 8 inches (20 cm) height"
        },
        {
          name: "Large",
          dimensions: "12 inches (30 cm) diameter, 10 inches (25 cm) height"
        }
      ],
    },
  ];
  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Router>
          <ScrollToTop/>
          <ToastContainer
        position="top-right"
        autoClose={3000}  
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Navbar products={dummyProducts}/>  
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<AboutSection/>} />
        <Route path="/product/:id" element={<ProductDetails products={dummyProducts}/>} />
        <Route path="/cart" element={<CartItems />} />

      </Routes>
      <Footer/>
    </Router>
    </CartContext.Provider>
  
  );
}

export default App;
