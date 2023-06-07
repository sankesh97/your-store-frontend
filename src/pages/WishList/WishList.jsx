import { useContext, useEffect } from 'react';
import { WishListContext } from '../../context/AppContext';

const WishList = () => {
  const { fetchWishList, wishList } = useContext(WishListContext);
  useEffect(() => {
    fetchWishList();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='card border shadow-0'>
            <div className='m-4'>
              <h4 className='card-title mb-4'>Your Wish List</h4>
              {wishList.length > 0 ? (
                wishList.map((product) => (
                  <div key={product._id} className='row gy-3 mb-4'>
                    <div className='col-lg-5'>
                      <div className='me-lg-5'>
                        <div className='d-flex'>
                          <img
                            src={product.imageURL}
                            className='border rounded me-3'
                            style={{ width: '96px', height: '96px' }}
                          />
                          <div className=''>
                            <a href='#' className='nav-link'>
                              {product.title}
                            </a>
                            <p className='text-muted'>{product.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap'>
                      <div className=''>
                        <select
                          style={{ width: '100px' }}
                          className='form-select me-4'
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className=''>
                        <h6 className='h6'>$1156.00</h6> <br />
                        <small className='text-muted text-nowrap'>
                          $460.00 / per item
                        </small>
                      </div>
                    </div>
                    <div className='col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2'>
                      <div className='float-md-end'>
                        <a
                          href='#!'
                          className='btn btn-light border px-2 icon-hover-primary'
                        >
                          <i className='bi bi-heart fa-lg px-1 text-secondary'></i>
                        </a>
                        <a
                          href='#'
                          className='btn btn-light border text-danger icon-hover-danger'
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>There are no products here</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishList;
