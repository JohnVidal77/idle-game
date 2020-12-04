import { useState } from "react";

const App = () => {
  const [points, setPoints] = useState(0);

  return (
    <div>
      <div>
        <span style={{ display: "block" }}>{points} points</span>
        <button
          style={{ display: "block" }}
          onClick={() => setPoints(points + 1)}
        >
          Click here
        </button>
      </div>
      <div>Upgrades</div>
      <div>Buildings</div>
    </div>
  );
};
export default App;
