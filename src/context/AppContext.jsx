import { CartProvider, CartContext } from './cartContext';
import { ProductContext, ProductProvider } from './productContext';
export { CartContext, ProductContext };

const AppContext = ({ children }) => {
  return (
    <CartProvider>
      <ProductProvider>{children}</ProductProvider>
    </CartProvider>
  );
};
export default AppContext;
