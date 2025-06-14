import { wowClasses } from "../classeWoW";
import type { Player } from "../types";
import { groupBy } from "lodash";
import UserTile from "./UserTile";

export default function Preview({ data }: { data: Player[] }) {
//   console.log("Preview data:", JSON.stringify(data, null, 2));
  const formatedData = groupBy(
    data.map((row) => {
      const role = wowClasses[
        row["classe1"] as keyof typeof wowClasses
      ].specs.find((spec) => {
        return row["spec1"] === spec.name;
      })?.role;
      return {
        pseudo: row["pseudo"] || "N/A",
        classe: row["classe1"] || "N/A",
        spec: row["spec1"] || "N/A",
        role: role || "N/A",
      };
    }),
    "role"
  );
  // console.log("Preview data:", formatedData);
  return (
    <div id="Preview">
      <h3>Previsualisation</h3>
      <div className="group">
        <h4>{formatedData["tank"]?.length} / 2 - Tank</h4>
        {formatedData["tank"]?.length ? (
          <div className="row">
            {formatedData["tank"].map((item, index) => (
              <UserTile key={index} pseudo={item.pseudo} classe={item.classe} />
            ))}
          </div>
        ) : (
          <p>Aucun tank</p>
        )}
      </div>
      <div className="group">
        <h4>{formatedData["heal"]?.length} / 4 - Healer</h4>
        {formatedData["heal"]?.length ? (
          <div className="row">
            {formatedData["heal"].map((item, index) => (
              <UserTile key={index} pseudo={item.pseudo} classe={item.classe} />
            ))}
          </div>
        ) : (
          <p>Aucun healer</p>
        )}
      </div>
      <div className="group">
        <h4>{formatedData["melee"]?.length} / 8 - Melee</h4>
        {formatedData["melee"]?.length ? (
          <div className="row">
            {formatedData["melee"].map((item, index) => (
              <UserTile key={index} pseudo={item.pseudo} classe={item.classe} />
            ))}
          </div>
        ) : (
          <p>Aucun melee</p>
        )}
      </div>
      <div className="group">
        <h4>{formatedData["ranged"]?.length} / 11 - Ranged</h4>
        {formatedData["ranged"]?.length ? (
          <div className="row">
            {formatedData["ranged"].map((item, index) => (
              <UserTile key={index} pseudo={item.pseudo} classe={item.classe} />
            ))}
          </div>
        ) : (
          <p>Aucun ranged</p>
        )}
      </div>
    </div>
  );
}
