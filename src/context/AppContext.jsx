import { CartProvider, CartContext } from './cartContext';
import { ProductContext, ProductProvider } from './ProductContext';
import { CategoryContext, CategoryProvider } from './CategoryContext';
import { WishListContext, WishListProvider } from './WishListContext';
export { CartContext, ProductContext, CategoryContext, WishListContext };

const AppContext = ({ children }) => {
  return (
    <CartProvider>
      <ProductProvider>
        <CategoryProvider>
          <WishListProvider>{children}</WishListProvider>
        </CategoryProvider>
      </ProductProvider>
    </CartProvider>
  );
};
export default AppContext;
