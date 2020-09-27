import React, { useReducer } from 'react';
import { reducer, initialState, Context } from './Context/Context'
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import ProductInfo from './pages/ProductInfo';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import PageWithData from './pages/InfoPage';

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
})
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ApolloProvider client={client}>
      <Context.Provider value={{ state, dispatch }}>
        <Redirect to={'/login'} />
        <Switch>
          <Route path='/product' exact={true} component={PageWithData} />
          <Route path='/login' component={Login} />
          <Route path='/product/:idUser' component={ProductInfo} />
        </Switch>
      </Context.Provider>
    </ApolloProvider>
  );
}

export default App;
