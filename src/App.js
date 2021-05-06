import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./Header";
import CreatorFans from "./CreatorFans"
import Pricing from "./Pricing"
import Footer from "./Footer"
import VerticalMark from "./VerticalMark"
import "./App.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <VerticalMark />
        <Switch>
          {/* <Route path="/">
            <CreatorFans/>
          </Route>
          <Route path="/pricing">
            <Pricing/>
          </Route> */}
          <Route path="/" component={CreatorFans} exact />
          <Route path="/pricing" component={Pricing} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
