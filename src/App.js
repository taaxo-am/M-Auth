import React from 'react';
import Login from './pages/login&singup/Login'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditProfile from "./pages/account/profile/EditProfile";
import Account from "./pages/account/Account";
import LoginAndSecurity from "./pages/account/Login&Security";
import DeliveryAddress from "./pages/account/delivery-address/DeliveryAddress";
import Orders from "./pages/account/orders/Orders";
import Signup from "./pages/login&singup/Signup";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/'>
              <Login />
          </Route>
          <Route exact path='/signup'>
              <Signup />
          </Route>
          <Route path='/account'>
              <Account />
          </Route>
          <Route path='/login&security'>
              <LoginAndSecurity />
          </Route>
          <Route path='/edit-profile'>
              <EditProfile />
          </Route>
          <Route path='/delivery-address'>
              <DeliveryAddress />
          </Route>
          <Route path='/orders'>
              <Orders />
          </Route>
          <Route path='/detail'>
              <Detail />
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
