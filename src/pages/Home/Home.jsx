import './Home.module.css';
import slideOne from '../../assets/slide-1.jpg';
import slideTwo from '../../assets/slide-2.jpg';
import { useContext, useEffect } from 'react';
import { CategoryContext } from '../../context/AppContext';

const Home = () => {
  const { categoryList, fetchCategories } = useContext(CategoryContext);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <section className='px-0 pb-5'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='false'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={slideOne} className='d-block w-100' alt='...' />
              {/* <div className='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
            <div className='carousel-item'>
              <img src={slideTwo} className='d-block w-100' alt='...' />
              {/* <div className='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div> */}
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </section>
      <section className='text-center'>
        <h2 className='h2'>Our Products</h2>
        <div className='container'>
          <div className='row'>
            {categoryList.length &&
              categoryList.map(({ id, category, description }) => (
                <div key={id} className='col-4 categories'>
                  <h2>{category}</h2>
                  <p>{description}</p>
                </div>
              ))}
            <div className='col-4 p-2'>
              <h2></h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
