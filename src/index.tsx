import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import './index.css';
import App from './App';

const token = sessionStorage.getItem('token');
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  headers: {
    authorization: `Bearer ${token}`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root'));
