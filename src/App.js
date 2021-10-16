import React from "react";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Parking Data</h1>
      </div>

      <div className="parking-data">
        <div className="car-info">
          <h3>Car Name</h3>
          <h3>Car Number</h3>
          <h3>Owner Name</h3>
        </div>

        <div className="car-content">
          <p>Audi</p>
          <p>MZT 156</p>
          <p>xyz</p>
        </div>
      </div>
    </div>
  );
}

export default App;
