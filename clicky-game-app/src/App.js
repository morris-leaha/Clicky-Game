import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dogs from "./pages/Dogs";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Jumbotron />
        <Switch>
            <Route exact path="/" component={Dogs} />
            <Route component={PageNotFound} />
          </Switch>
        
        <Footer />
      </Router>
    );
  }
}

export default App;
