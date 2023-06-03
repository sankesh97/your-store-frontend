import { useContext, useEffect } from 'react';
import { ProductContext } from '../context/AppContext';

const ProductListing = () => {
  const { filteredProductList, fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {filteredProductList.length ? (
        <>
          <h2>Product</h2>
          {filteredProductList.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default ProductListing;
