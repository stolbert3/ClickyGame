import React from 'react';
import Jumbotron from "./components/Jumbotron.js";
import Navbar from "./components/Navbar.js";
import Gameboard from "./components/Gameboard.js";

const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    <Gameboard />
  </div>
);
export default App;