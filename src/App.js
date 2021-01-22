import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/Pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
