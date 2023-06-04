import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/AppContext';

const SingleProduct = () => {
  const { productId } = useParams();
  const { fetchAProduct, currentProduct } = useContext(ProductContext);
  const quantity = useRef(1);
  useEffect(() => {
    fetchAProduct(productId);
  }, []);

  return (
    <>
      {currentProduct ? (
        <>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 p-5'>
                <img className='img-fluid' />
              </div>
              <div className='col-md-6 offset-md-2 p-5'>
                <h1>{currentProduct.title}</h1>
                <p>{currentProduct.description}</p>
                <div className='input-group'>
                  <button className='btn btn-outline-secondary' type='button'>
                    -
                  </button>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Quanitity'
                    ref={quantity}
                    aria-label="Recipient's username with two button addons"
                    aria-describedby='button-addon4'
                  />

                  <button className='btn btn-outline-secondary' type='button'>
                    +
                  </button>
                </div>
                <div className='input-group'>
                  <button className='btn btn-outline-secondary' type='button'>
                    -
                  </button>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Quanitity'
                    ref={quantity}
                    aria-label="Recipient's username with two button addons"
                    aria-describedby='button-addon4'
                  />

                  <button className='btn btn-outline-secondary' type='button'>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>There is some issue with retrieving the data</p>
      )}
    </>
  );
};
export default SingleProduct;
