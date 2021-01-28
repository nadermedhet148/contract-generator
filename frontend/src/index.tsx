import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Containers/Login';
import Home from './Containers/Home';
import ContractForm from './Containers/ContractForm';
import Store from './Store'
import { Provider } from 'react-redux'
import ViewContract from './Containers/ViewContract';
import { useSelector } from 'react-redux';



const store = Store();


function AdminGuardedRoute() {
  const user = useSelector(
    (state) => state.users.user
  );
  return function ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => (!!user ? <Component {...props} /> : <Login />)}
      />
    );
  };
}

const APP = () => {


  const AdminRoute = AdminGuardedRoute();

  return (
    <React.StrictMode>
      <Router  >
        <div style={{height:'100%'}}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
          <Switch>
            <AdminRoute path="/home" exact component={Home} />
          </Switch>
          <Switch>
            <AdminRoute path="/contract/create" exact component={ContractForm} />
          </Switch>
          <Switch>
            <Route path="/contract/view/:id">
              <ViewContract />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  )
}


ReactDOM.render(
  <Provider store={store}>
    <APP />
  </Provider>

  ,
  document.getElementById('root')
);

reportWebVitals();
