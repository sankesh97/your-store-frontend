import { createContext, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://your-store-backend.netlify.app/api/categories'
      );
      const jsonData = await response.json();
      setCategoryList(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CategoryContext.Provider value={{ categoryList, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
