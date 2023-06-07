import axios from 'axios';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const encodedToken = localStorage.getItem('token');

  // Fetching Inital Cart Details
  const fetchCartDetails = async () => {
    try {
      const response = await axios.get('/api/user/cart', {
        headers: { authorization: encodedToken },
      });
      setCartList(response.data.cart);
      console.log(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  // Add to Cart
  const addToCart = async (addedProduct) => {
    try {
      console.log(addedProduct);
      const tempList = [...cartList, addedProduct];
      console.log(tempList);
      const response = await axios.post(
        '/api/user/cart',
        { tempList },
        {
          headers: { authorization: encodedToken },
        }
      );
      setCartList(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider value={{ fetchCartDetails, cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
