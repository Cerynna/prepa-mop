import { findBestPartition } from "../services/utils";
import type { Player } from "../types";
import UserTile from "./UserTile";

export default function PerfectRoster({ data }: { data: Player[] }) {
  const { roster1, roster2, score } = findBestPartition(data);
  return (
    <div id="PerfectRoster">
      <h3>Composition Split - Score: {score}</h3>
      <div className="group">
        <h4>Split 1</h4>
        <div className="row">
          {roster1.tank.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
          {roster1.heal.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
          {roster1.melee.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
          {roster1.ranged.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
        </div>
      </div>
      <div className="group">
        <h4>Split 2</h4>
        <div className="row">
          {roster2.tank.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
          {roster2.heal.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
          {roster2.melee.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
          {roster2.ranged.map((player, index) => (
            <UserTile
              key={index}
              pseudo={player.pseudo}
              classe={player.class}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
