import { wowClasses } from "../classeWoW";

type Row = {
  [key: string]: string;
};
export default function Result({ data }: { data: Row[] }) {
  return (
    <div id="Result">
      <h3>Roster MoP de la -Corp-</h3>
      {data.length > 0 ? (
        <div className="result-grid">
          {data.map((row, index) => {
            const pseudo = row["pseudo"] || "N/A";
            const perso1 =
              wowClasses[row["classe1"] as keyof typeof wowClasses]?.name ||
              "N/A";
            const icon1 =
              wowClasses[row["classe1"] as keyof typeof wowClasses]?.specs.find(
                (spec) => spec.name === row["spec1"]
              )?.icon || "";

            const perso2 =
              wowClasses[row["classe2"] as keyof typeof wowClasses]?.name ||
              "N/A";
            const icon2 =
              wowClasses[row["classe2"] as keyof typeof wowClasses]?.specs.find(
                (spec) => spec.name === row["spec2"]
              )?.icon || "";
            return (
              <div
                key={index}
                className="result-row"
                style={{
                  color:
                    wowClasses[row["classe1"] as keyof typeof wowClasses]
                      ?.color || "#000",
                }}
              >
                {pseudo}
                <img
                  src={icon1}
                  alt={`${perso1} icon`}
                  width="24"
                  height="24"
                />
                <img
                  src={icon2}
                  alt={`${perso2} icon`}
                  width="24"
                  height="24"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Aucune donnée disponible.</p>
      )}
    </div>
  );
}
