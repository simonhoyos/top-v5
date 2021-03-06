import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { client } from './utils/api';
import { ApolloProvider } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';

// client
//   .query({
//     query: gql`
//       {
//         users {
//           id
//           name
//           age
//         }
//       }
//     `
//   })
//   .then(response => console.log(response))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
