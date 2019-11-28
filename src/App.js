import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "containers/Login";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import LandingComponent from "./containers/LandingPage/LandingPage";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <HeaderComponent />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={LandingComponent} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
