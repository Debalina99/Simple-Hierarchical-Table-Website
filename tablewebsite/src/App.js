import { useState } from "react";
import json from "./Data/data.json";
import "./App.css";
import Table from "./Components/Table";

function App() {
  const [data, setData] = useState(json);
  return (
    <div className="App">
      <Table data={data} setData={setData} />
    </div>
  );
}

export default App;
