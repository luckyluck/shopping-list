import React, { FormEvent, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // If we already have a token, we should log user in automatically
    const token = sessionStorage.getItem('token');
    if (token) {
      history.push('/');
    }
  }, [history]);

  const onSubmitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setError('');
    // Do not validate data intentionally
    if (!username || !password) {
      setError('Check your form fields');
    } else {
      fetch(
        process.env.REACT_APP_AUTH_URL,
        { method: 'POST', body: JSON.stringify({ username, password }) }
        )
        .then(response => response.json())
        .then(({ token }) => {
          sessionStorage.setItem('token', token);
          history.push('/');
        });
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div>{error}</div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id={'email'} value={username} onChange={(e): void => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id={'password'} value={password} onChange={(e): void => setPassword(e.target.value)}/>
        </div>
        <div>
          <button type={'submit'}>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
