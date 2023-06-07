import { createContext, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);

  const sortProducts = (type) => {
    const tempProductList = [...filteredProductList];
    if (type === 'LTH')
      tempProductList.sort((a, b) => {
        return a.price - b.price;
      });
    if (type === 'HTL')
      tempProductList.sort((a, b) => {
        return b.price - a.price;
      });
    setFilteredProductList(tempProductList);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProductList(response.data.products);
      setFilteredProductList(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAProduct = async (productId) => {
    try {
      console.log(productId);
      const response = await axios.get('/api/products/' + productId);
      setCurrentProduct(response.data.product);
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
        fetchAProduct,
        currentProduct,
        sortProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
