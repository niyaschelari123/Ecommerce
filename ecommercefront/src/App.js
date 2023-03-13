import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Signin from './components/Signin';
import NoPage from './components/NoPage';
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import Signup from "./components/Signup";
import Lay from "./components/Lay";
import Profile from "./components/profile/Profile";
import Prodcat from "./components/prodcat/Prodcat";
import Top from "./components/top/Top";
import Searchprod from "./components2/Searchprod/Searchprod";
import Indprod from "./components2/indprod/Indprod";
import Iphone from "./components2/iphone/Iphone";
import Checkout from "./components2/checkout/Checkout";
import Card from "./components2/cards/Card";
import Ordered from "./components2/ordered/Ordered";
import Orders from "./components2/orders/Orders";
import Otp from "./components2/otp/Otp";
import Updatep from "./components2/updatep/Updatep";
import Updatepage from "./components2/updatepage/Updatepage";
function App() {
 
  return (
    <Router>
      <Top/>
      <Lay />
      <Switch>
        <Route exact path="/">
          <Home
            
          />
        </Route>
        <Route path="/cart">
          <Cart
            
          />
        </Route>
        <Route path="/signin">
          <Signin
            
          />
        </Route>
        <Route path="/signup">
          <Signup
            
          />
        </Route>
        <Route path="/addProduct">
          <AddProduct/>
        </Route>
        <Route path="/profile/:name">
          <Profile />
        </Route>
        <Route path="/products/:name">
          <Prodcat />
        </Route>
        <Route path="/searchedproducts/:name">
          <Searchprod />
        </Route>
        <Route path="/indprod/:id">
          <Indprod />
        </Route>
        <Route path="/iphone">
          <Iphone />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/cards">
          <Card />
        </Route>
        <Route path="/ordered">
          <Ordered />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/otp">
          <Otp />
        </Route>
        <Route path="/updateproduct">
          <Updatep />
        </Route>
        <Route path="/update/:id">
          <Updatepage />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
