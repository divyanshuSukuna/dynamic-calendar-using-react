import React from "react";

function App() {
  setInterval(updateTime, 1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = React.useState(now);
  setInterval(updateTime, 1000);
  function updateTime() {
    const now = new Date().toLocaleTimeString();
    setTime(now);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
