import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/Pages";

function App() {
  return (
    <Router>
      <div className="App" style={{position: "relative", minHeight: "100vh"}}>
        <Header/>
        <MainPage />
        <footer style={{position: "absolute", left: "0", bottom: "0", paddingTop: "2em", paddingBottom: "2em", width: "100%"}}>
          <div style={{textAlign: "center"}}> 
            Copyright &#169; by Hoang Truong
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
