import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div>
        <h3>React Hooks</h3>
        <Link to="/exe1">Exercicio 1 - useState</Link>
        <br />
        <Link to="/exe2">Exercicio 2 - useEffect e LocalStorage</Link>
        <br />
        <Link to="/exe3">Exercicio 3 - useStates</Link>
        <br />
        <Link to="/exe4">Exercicio 4 - useStates Tic Tac Toe</Link>
        <br />
      </div>
      <div>
        <h3>Advanced Hooks</h3>
        <p>Em desenvolvimento</p>
      </div>
    </div>
  );
}
