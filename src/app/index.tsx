import React, { useState } from "react";

const App = () => {
  const [points, setPoints] = useState(0);

  return (
    <>
      <main>
        <span style={{ display: "block" }}>{points} points</span>
        <button
          style={{ display: "block" }}
          onClick={() => setPoints(points + 1)}
        >
          Click here
        </button>
      </main>
      <section>Upgrades</section>
      <section>Buildings</section>
    </>
  );
};
export default App;
