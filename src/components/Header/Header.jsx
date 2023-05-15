import styles from './Header.module.css';
import logo from '../../assets/your-Electronics-Logo.png';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo} alt='Your Electornics Store.' />
          <input type='text' placeholder='Search' />
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Header;
