import React from "react";
import "../styles/Navbar.css";
import {score, top, isCorrect} from "./Gameboard.js";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div class="navbar-brand">
      <a href="../../public/index.html">Clicky Game</a>
    </div>

    <div class="correctIncorrect">
      <h4>You guessed {isCorrect}</h4>
    </div>

    <div class="gameScore">
      <h4 id="currentScore">Score: {score}</h4>
      <h4 id="topScore">| Top Score: {top}</h4>
    </div>
  </nav>
);

export default Navbar;
