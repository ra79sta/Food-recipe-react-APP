import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Layout from "./hoc/Layout/Layout";
import Home from "./pages/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./containers/Contact/Contact";
import Category from "./pages/Category/Category";
import SingleMeal from "./pages/SingleMeal/SingleMeal";
import Search from "./pages/Search/Search";
import MyMeal from "./pages/MyMeal/MyMeal";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={Contact} />
            <Route path="/category" component={Category} />
            <Route path="/singlemeal" component={SingleMeal} />
            <Route path="/search" component={Search} />
            <Route path="/mymeal" component={MyMeal} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
