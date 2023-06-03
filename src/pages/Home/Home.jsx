import { useContext, useEffect } from 'react';

import Card from '../../components/Card/Card';

import { CategoryContext } from '../../context/AppContext';
import './Home.css';
import slideOne from '../../assets/slide-1.jpg';
import slideTwo from '../../assets/slide-2.jpg';

const Home = () => {
  const { categoryList, fetchCategories } = useContext(CategoryContext);
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      {/* Categories Section */}
      <section className='text-center p-1'>
        <h2 className='h2 mb-5'>Our Products</h2>
        <div className='container'>
          <div className='row justify-content-around'>
            {categoryList.length &&
              categoryList.map(({ id, category, description, imgLink }) => (
                <div key={id} className='col-4 d-flex aling-items-stretch'>
                  <Card imgLink={imgLink}>
                    <h2>{category}</h2>
                    <p>{description}</p>
                  </Card>
                </div>
              ))}
            <div className='col-4 p-2'>
              <h2></h2>
            </div>
          </div>
        </div>
      </section>
      {/* Slider Section */}
      <section className='container'>
        <div
          id='HomeSliderCaptions'
          className='carousel slide'
          data-bs-ride='false'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#HomeSliderCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#HomeSliderCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={slideOne} className='d-block w-100' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src={slideTwo} className='d-block w-100' alt='...' />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#HomeSliderCaptions'
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
            data-bs-target='#HomeSliderCaptions'
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
    </>
  );
};
export default Home;
