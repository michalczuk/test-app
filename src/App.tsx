import React from "react";
import MapComponent from "./views/MapComponent";
import "./App.css";
import { useQuery } from "react-query";
import { fetchDeviceList } from "./data/api";

const App: React.FC = () => {
  const { data } = useQuery("deviceList", fetchDeviceList);

  return (
    <div className="App">
      <MapComponent devices={data?.data} />
    </div>
  );
};

export default App;
