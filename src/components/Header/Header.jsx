import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/your-Electronics-Logo.png';

const Header = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark text-white'>
          <div className='container py-2'>
            <NavLink className='navbar-brand text-white' to='/'>
              <img src={logo} style={{ maxWidth: '200px' }} />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              data-bs-theme='dark'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <form className='d-flex me-auto' role='search'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-light' type='submit'>
                  Search
                </button>
              </form>

              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink className='text-white' to='/products'>
                    <i className='bi bi-person-circle fs-4'></i>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='text-white' to='/wishlist'>
                    <i className='bi bi-person-heart fs-4'></i>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='text-white' to='/cart'>
                    <i className='bi bi-bag fs-4'></i>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
