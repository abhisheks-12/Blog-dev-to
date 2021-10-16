import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/config";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const parkingData = await getDocs(collection(db, "cars"));
      // console.log(parkingData);
      setCars(parkingData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(parkingData);
    };

    getData();
  }, []);

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

        {cars.map((data) => (
          <div className="car-content" key={data.id}>
            <p>{data.name}</p>
            <p>{data.number}</p>
            <p>{data.owner}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
