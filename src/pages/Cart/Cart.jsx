import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/AppContext';

const Cart = () => {
  const { fetchCartDetails, cartList } = useContext(CartContext);
  useEffect(() => {
    fetchCartDetails();
  }, []);
  return (
    <>
      {/* <!-- cart + summary --> */}
      <section className='my-2'>
        <div className='container'>
          <div className='row'>
            {/* <!-- cart --> */}
            <div className='col-lg-9'>
              <div className='card border shadow-0'>
                <div className='m-4'>
                  <h4 className='card-title mb-4'>Your shopping cart</h4>
                  {cartList.length > 0 ? (
                    cartList.map((product) => (
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
                              {' '}
                              $460.00 / per item{' '}
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

                <div className='border-top pt-4 mx-4 mb-4'>
                  <p>
                    <i className='bi bi-truck text-muted'></i> Free Delivery
                    within 1-2 weeks
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- cart --> */}
            {/* <!-- summary --> */}
            <div className='col-lg-3'>
              <div className='card mb-3 border shadow-0'>
                <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label className='form-label'>Have coupon?</label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control border'
                          name=''
                          placeholder='Coupon code'
                        />
                        <button className='btn btn-light border'>Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='card shadow-0 border'>
                <div className='card-body'>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Total price:</p>
                    <p className='mb-2'>$329.00</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Discount:</p>
                    <p className='mb-2 text-success'>-$60.00</p>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>TAX:</p>
                    <p className='mb-2'>$14.00</p>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between'>
                    <p className='mb-2'>Total price:</p>
                    <p className='mb-2 fw-bold'>$283.00</p>
                  </div>

                  <div className='mt-3'>
                    <a href='#' className='btn btn-success w-100 shadow-0 mb-2'>
                      {' '}
                      Make Purchase{' '}
                    </a>
                    <a href='#' className='btn btn-light w-100 border mt-2'>
                      {' '}
                      Back to shop{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- summary --> */}
          </div>
        </div>
      </section>
      {/* <!-- cart + summary --> */}
    </>
  );
};
export default Cart;
