import { createContext, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProductList(response.data.products);
      setFilteredProductList(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        fetchProducts,
        filteredProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
