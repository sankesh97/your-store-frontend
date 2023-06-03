import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { loginHandler, encodedToken } = useContext(AuthContext);
  return (
    <>
      <form onSubmit={(event) => loginHandler(event)}>
        <div className='mb-3'>
          <label htmlFor='loginEmail' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='loginEmail'
            aria-describedby='emailHelp'
          />
          <div id='emailHelp' className='form-text'>
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='loginPassword' className='form-label'>
            Password
          </label>
          <input type='password' className='form-control' id='loginPassword' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      {encodedToken ? encodedToken : 'Nothing'}
    </>
  );
};
export default Login;
