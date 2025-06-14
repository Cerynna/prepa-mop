import { wowClasses } from "../classeWoW";

export default function UserTile({
  pseudo,
  classe,
}: {
  pseudo: string;
  classe: string;
}) {
  const color = wowClasses[classe as keyof typeof wowClasses]?.color || "#000";
  const icon = wowClasses[classe as keyof typeof wowClasses]?.icon;
  return (
    <div
      className="UserTile"
      style={{
        color: color,
      }}
    >
      <img src={icon} alt="" width={24} height={24} />
      <span>{pseudo}</span>
    </div>
  );
}
