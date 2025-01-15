import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Product from './Product';
import ContactUs from './ContactUs';
import ProductDBiger from './ProductDBiger';
import ShoppingBasket from './shoppingBasket';
import Connections from './Connections';
import Resister_LodIn from './Resister_LodIn';
import UserManager from './UserManager';


export const Routing = ({ products, addCart, myCart, lessFromCart,calculateSum ,deleteProduct}) => {
    return (
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Product" element={<Product key={products.code} products={products} addCart={addCart} deleteProduct={deleteProduct} />} />
            <Route path="/ProductDBiger/:name/:descibe/:size/:price/:img" element={<ProductDBiger />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Connections" element={<Connections/>} />
            <Route path="/Resister_LodIn" element={<Resister_LodIn/>} />
            <Route path="/UserManager" element={<UserManager/>} />

            <Route path="ShoppingBasket" element={<ShoppingBasket myCart={myCart} lessFromCart={lessFromCart} calculateSum={calculateSum}/>} />

        </Routes>
    );
};


