import axios from 'axios';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [encodedToken, setEncodedToken] = useState();

  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: 'Adarsh',
        lastName: 'Balika',
        email: 'adarshbalika@neog.camp',
        password: 'adarshBalika',
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem('token', response.data.encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  const loginHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      console.log(email, password);
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response.data.encodedToken);
      setEncodedToken(response.data.encodedToken);
      localStorage.setItem('token', response.data.encodedToken);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <AuthContext.Provider value={{ encodedToken, loginHandler, signupHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
