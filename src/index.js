import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjb3hxe290lvm0156rfs2zzyp' }),
    cache: new InMemoryCache().restore({})
  })

ReactDOM.render(
<ApolloProvider client={client}>
    <App />
</ApolloProvider>, document.getElementById('root'));

