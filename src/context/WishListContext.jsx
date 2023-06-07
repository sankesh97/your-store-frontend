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
      console.log(response.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <WishListContext.Provider value={{ fetchWishList, wishList }}>
      {children}
    </WishListContext.Provider>
  );
};
