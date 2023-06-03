import { CartProvider, CartContext } from './CartContext';
import { AuthProvider, AuthContext } from './AuthContext';
import { ProductContext, ProductProvider } from './ProductContext';
import { CategoryContext, CategoryProvider } from './CategoryContext';
import { WishListContext, WishListProvider } from './WishListContext';
export {
  CartContext,
  ProductContext,
  CategoryContext,
  WishListContext,
  AuthContext,
};

const AppContext = ({ children }) => {
  return (
    <CartProvider>
      <ProductProvider>
        <CategoryProvider>
          <WishListProvider>
            <AuthProvider>{children}</AuthProvider>
          </WishListProvider>
        </CategoryProvider>
      </ProductProvider>
    </CartProvider>
  );
};
export default AppContext;
