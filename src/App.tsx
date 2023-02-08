import React from "react";
import { Landing } from "./pages/Landing/Landing";
import { Latest } from "./pages/Latest/Latest";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <Landing />
        <Latest />
      </main>
    </div>
  );
};

export default App;
