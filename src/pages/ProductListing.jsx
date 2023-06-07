import { useContext, useEffect } from 'react';
import {
  CartContext,
  CategoryContext,
  ProductContext,
} from '../context/AppContext';
import { NavLink } from 'react-router-dom';

const ProductListing = () => {
  const { filteredProductList, fetchProducts, sortProducts } =
    useContext(ProductContext);
  const { categoryList, fetchCategories } = useContext(CategoryContext);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    // <!-- sidebar + content -->
    <section className=''>
      <div className='container'>
        <div className='row'>
          {/* <!-- sidebar --> */}
          <div className='col-lg-3'>
            {/* <!-- Toggle button --> */}
            <button
              className='btn btn-outline-secondary mb-3 w-100 d-lg-none'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#FilterContent'
              aria-controls='FilterContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span>Show filter</span>
            </button>
            {/* <!-- Collapsible wrapper --> */}
            <div className='collapse card d-lg-block mb-5' id='FilterContent'>
              <div className='d-flex justify-content-around py-2'>
                <span>Product Filter</span>
                <span>CLEAR</span>
              </div>
              <div className='accordion' id='accordionPanelsStayOpenExample'>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button text-dark bg-light'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseOne'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseOne'
                    >
                      Sort Price
                    </button>
                  </h2>
                  <div
                    id='panelsStayOpen-collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                  >
                    <div className='accordion-body'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault1'
                        >
                          High to Low
                        </label>
                      </div>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='flexRadioDefault1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='flexRadioDefault1'
                        >
                          Low to High
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button text-dark bg-light'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseTwo'
                      aria-expanded='true'
                      aria-controls='panelsStayOpen-collapseTwo'
                    >
                      Categories
                    </button>
                  </h2>
                  <div
                    id='panelsStayOpen-collapseTwo'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingTwo'
                  >
                    <div className='accordion-body'>
                      <div>
                        {categoryList.map(({ _id, category }) => {
                          return (
                            <div key={_id} className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value={category}
                                id='flexCheckDefault'
                              />
                              <label
                                className='form-check-label'
                                htmlFor='flexCheckDefault'
                              >
                                {category}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='accordion-item'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button text-dark bg-light'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#panelsStayOpen-collapseFive'
                      aria-expanded='false'
                      aria-controls='panelsStayOpen-collapseFive'
                    >
                      Ratings
                    </button>
                  </h2>
                  <div
                    id='panelsStayOpen-collapseFive'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingThree'
                  >
                    <div className='accordion-body'>
                      {/* <!-- Default checkbox --> */}
                      <div className='form-check'>
                        <div className='d-flex justify-content-between'>
                          <span>
                            <i className='bi bi-star'></i> 0
                          </span>
                          <span>
                            <i className='bi bi-star'></i> 5
                          </span>
                        </div>
                        <input
                          type='range'
                          className='form-range'
                          id='ratingsRange'
                          min='0'
                          max='5'
                          defaultValue='2'
                          step='1'
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- sidebar -->*/}
          {/*<!-- content --> */}
          <div className='col-lg-9'>
            <header className='d-sm-flex align-items-center border-bottom mb-2 pb-2'>
              <strong className='d-block py-2'>
                {filteredProductList.length} Items found
              </strong>
            </header>
            {filteredProductList.map((product) => (
              <div
                key={product._id}
                className='row justify-content-center mb-3'
              >
                <div className='col-md-12'>
                  <div className='card shadow-0 border rounded-3'>
                    <div className='card-body'>
                      <div className='row g-0'>
                        <div className='col-xl-3 col-md-4 d-flex justify-content-center'>
                          <div className='bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0'>
                            <img src={product.imageURL} className='w-100' />
                            <a href='#!'>
                              <div className='hover-overlay'>
                                <div
                                  className='mask'
                                  style={{
                                    backgroundColor:
                                      'rgba(253, 253, 253, 0.15)',
                                  }}
                                ></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className='col-xl-6 col-md-5 col-sm-7'>
                          <h5>{product.title}</h5>
                          <div className='d-flex flex-row'>
                            <div className='text-warning mb-1 me-2'>
                              <i className='bi bi-star'></i>
                              <span className='ms-1'>{product.rating}</span>
                            </div>
                          </div>

                          <p className='text mb-4 mb-md-0'>
                            {product.description}
                          </p>
                        </div>
                        <div className='col-xl-3 col-md-3 col-sm-5'>
                          <div className='d-flex flex-row align-items-center mb-1'>
                            <h4 className='mb-1 me-1'>
                              &#8377;{product.price}
                            </h4>
                          </div>
                          <div className='mt-4'>
                            <button
                              className='btn btn-primary shadow-0 mx-2'
                              type='button'
                              onClick={() => {
                                console.log(product);
                                addToCart(product);
                              }}
                            >
                              Add To Cart
                            </button>
                            <a
                              href='#!'
                              className='btn btn-light border mx-2 pt-2 icon-hover'
                            >
                              <i className='bi bi-heart px-1'></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductListing;
