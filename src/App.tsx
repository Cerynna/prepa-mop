import FromResult from "./components/FromResult";
import Result from "./components/Result";
import "./App.scss";
import { useEffect, useState } from "react";
import { fetchSheetData } from "./services/sheet";
import Footer from "./components/Footer";

type Row = {
  [key: string]: string;
};

function App() {
  const [data, setData] = useState<Row[]>([]);

  const updateData = () => {
    fetchSheetData()
      .then((data) => {
        console.log("Données récupérées :", data);
        setData(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    updateData();
    // Optionally, you can set an interval to refresh data periodically
    const interval = setInterval(updateData, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <FromResult updateData={updateData} />
      <Result data={data} />
      <Footer />
    </div>
  );
}

export default App;
