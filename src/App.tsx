import React from "react";
import { Landing } from "./pages/Landing/Landing";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Landing />
      </main>
    </div>
  );
};

export default App;
