import { useContext, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { loginHandler, encodedToken } = useContext(AuthContext);
  const email = useRef('');
  const password = useRef('');

  return (
    <>
      <form
        onSubmit={(event) =>
          loginHandler(event, email.current.value, password.current.value)
        }
      >
        <div className='mb-3'>
          <label htmlFor='loginEmail' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='loginEmail'
            ref={email}
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
          <input
            type='password'
            className='form-control'
            id='loginPassword'
            ref={password}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      {encodedToken ? <p className='p'>{encodedToken}</p> : 'Nothing'}
    </>
  );
};
export default Login;
