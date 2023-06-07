import axios from 'axios';
import { createContext, useState } from 'react';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const encodedToken = localStorage.getItem('token');

  // Fetching Inital Cart Details
  const fetchWishList = async () => {
    try {
      const response = await axios.get('/api/user/wishlist', {
        headers: { authorization: encodedToken },
      });
      setWishList(response.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  // Add to WishList
  const addWishList = async (product) => {
    try {
      const response = await axios.post(
        '/api/user/wishlist',
        { product },
        {
          headers: { authorization: encodedToken },
        }
      );
      setWishList(response.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete Item in WishList
  const deleteWishList = async (productId) => {
    console.log(productId);
    try {
      const response = await axios.delete(
        `/api/user/wishlist/${toString(productId)}`,
        {
          headers: { authorization: encodedToken },
        }
      );
      console.log(response);
      setWishList(response.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WishListContext.Provider
      value={{ fetchWishList, addWishList, deleteWishList, wishList }}
    >
      {children}
    </WishListContext.Provider>
  );
};
