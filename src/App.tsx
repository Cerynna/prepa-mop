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

  useEffect(() => updateData, []);

  return (
    <div className="App">
      <FromResult updateData={updateData} />
      <Result data={data} />
      <Footer />
    </div>
  );
}

export default App;
