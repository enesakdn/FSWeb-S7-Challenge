import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FormComponent from "./components/FormComponent";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Enes Bey Yemekleri</h1>

        <nav className="order-pizza">
          <Link to="/">Anasayfa</Link>

          <Link to="/pizza">Sipariş Ver</Link>
        </nav>
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={FormComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;
