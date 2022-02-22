import Routes from "./routes";

import "./styles.css";

export default function App() {
  return (
    <div>
      <h1 className="title" data-testid="test-title">
        Curso Epic React
      </h1>

      <Routes />
    </div>
  );
}
