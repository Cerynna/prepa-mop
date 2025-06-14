import { useState } from "react";
import DropdownClasses from "./DropdownClasses";
import { addRowToSheet } from "../services/sheet";

export default function FromResult({ updateData }: { updateData: () => void }) {
  const [pseudo, setPseudo] = useState("");
  const [perso1, setPerso1] = useState("");
  const [perso2, setPerso2] = useState("");
  const [onLoading, setOnLoading] = useState(false);
  if (onLoading) {
    return <div id="FromResult">Loading...</div>;
  }
  return (
    <div id="FromResult">
      <h3>Rejoindre le roster</h3>
      <label htmlFor="pseudo">Pseudo</label>
      <input
        type="text"
        id="pseudo"
        defaultValue={pseudo}
        onChange={(e) => {
          setPseudo(e.target.value);
          console.log("Pseudo changed:", e.target.value);
        }}
      />
      <label htmlFor="perso1">Personnage 1</label>
      <DropdownClasses
        selectedOption={perso1}
        onChange={(value) => {
          setPerso1(value);
          console.log("Selected perso1:", value);
        }}
      />

      <label htmlFor="perso2">Personnage 2</label>
      <DropdownClasses
        selectedOption={perso2}
        onChange={(value) => {
          setPerso2(value);
          console.log("Selected perso2:", value);
        }}
      />
      <button
        onClick={() => {
          const [classe1, spec1, role1] = perso1.split("-");
          const [classe2, spec2, role2] = perso2.split("-");
          if (!pseudo || !perso1 || !perso2) {
            alert("Veuillez remplir tous les champs.");
            return;
          }
          console.log("Submitting data:", {
            pseudo,
            classe1,
            spec1,
            classe2,
            spec2,
          });
          setOnLoading(true);
          addRowToSheet({
            pseudo,
            classe1,
            spec1,
            role1,
            classe2,
            spec2,
            role2,
          })
            .then(() => {
              console.log("Data submitted successfully");
              setPerso1("");
              setPerso2("");
              setPseudo("");
              updateData();
              setOnLoading(false);
            })
            .catch((error) => {
              console.error("Error submitting data:", error);
              alert("Une erreur est survenue lors de l'envoi des données.");
              setOnLoading(false);
              updateData();
            });
          // Here you would typically handle the form submission, e.g., send data to a server
        }}
      >
        Submit
      </button>
    </div>
  );
}
