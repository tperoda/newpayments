import React from 'react';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import LandingComponent from "./containers/LandingPage/LandingPage";
import "./styles/global.scss";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent />
      </header>
      <main>
        <LandingComponent />
      </main>
    </div>
  );
}

export default App;
