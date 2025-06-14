import FromResult from "./components/FromResult";
import Result from "./components/Result";
import "./App.scss";
import { useEffect, useState } from "react";
import { fetchSheetData } from "./services/sheet";
import Footer from "./components/Footer";
import type { Player } from "./types";
import PerfectRoster from "./components/PerfectRoster";

function App() {
  const [data, setData] = useState<Player[]>([]);

  const updateData = () => {
    fetchSheetData()
      .then((pikachu) => {
        setData(pikachu);
      })
      .catch(console.error);
  };

  useEffect(() => {
    updateData();
    const interval = setInterval(updateData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <FromResult updateData={updateData} />
      <div className="column">
        <Result data={data} />
        <PerfectRoster data={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
