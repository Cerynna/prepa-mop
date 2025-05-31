import axios from "axios";

const SHEET_ID = "1UentrmgbI6J2gf3P_SrXltLEXz3MlcADYai9iY06bDc";
const API_KEY = "AIzaSyA7gvNbnuYZQieNveAx4Eb1Q85ViI7KyP0";
const RANGE = "Sheet1!A1:Z1000";

export const fetchSheetData = async () => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    const [header, ...rows] = response.data.values;
    console.log("Données récupérées :", rows);
    return rows.map((row: string[]) =>
      header.reduce((obj: any, key: string, index: number) => {
        obj[key] = row[index] || "";
        return obj;
      }, {})
    );
  } catch (error) {
    console.error("Erreur de récupération du Google Sheet", error);
    throw error;
  }
};

export const addRowToSheet = async (data: {
  pseudo: string;
  classe1: string;
  spec1: string;
  classe2: string;
  spec2: string;
}) => {
  const params = new URLSearchParams(data);

  const url = `https://script.google.com/macros/s/AKfycby6e0QSj3-VBP_ToPEEBG722EujoM4fdK9WOSc7DhVSUtPcUbZQepNvj_9DOVygLUE21w/exec?${params.toString()}`;

  try {
    const res = await fetch(url);
    const text = await res.text();
    console.log("Réponse :", text);
  } catch (error) {
    console.error("Erreur GET / ajout :", error);
  }
};
