import { useState } from "react";
import { wowClasses } from "../classeWoW";

export default function DropdownClasses({
  selectedOption,
  onChange,
}: {
  selectedOption: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown-classes-container"
      onClick={() => setOpen(!open)}
      onMouseLeave={() => setOpen(false)}
      // onMouseEnter={() => setOpen(true)}
    >
      {selectedOption ? (
        <SelectOption value={selectedOption} />
      ) : (
        "Choisir une classe"
      )}
      {/* <button>
       
      </button> */}
      {open && (
        <ul className="dropdown-classes">
          {Object.entries(wowClasses).map(([key, wowClass]) => (
            <li key={key} style={{ color: wowClass.color }}>
              <strong>{wowClass.name}</strong>
              <ul className="dropdown-specs">
                {wowClass.specs.map((spec, specIndex) => (
                  <li
                    key={specIndex}
                    onClick={() => {
                      onChange(`${key}-${spec.name}`);
                      setOpen(false);
                    }}
                  >
                    <img
                      src={spec.icon}
                      alt={`${spec.name} icon`}
                      width="24"
                      height="24"
                    />
                    {/* {spec.name} - {spec.role} */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SelectOption({ value }: { value: string }) {
  const [classe, spec] = value.split("-");
  type ClassKey = keyof typeof wowClasses;
  const classKey = classe as ClassKey;
  const findIcone = wowClasses[classKey]?.specs.find(
    (s) => s.name === spec
  )?.icon;
  if (!findIcone) {
    return <div>Unknown class or spec</div>;
  }
  return (
    <>
      <img
        src={findIcone}
        alt={`${spec} icon`}
        width="24"
        height="24"
        style={{
          marginRight: "8px",
        }}
      />
      <span
        style={{
          color: wowClasses[classKey]?.color || "#000",
          fontWeight: "bold",
        }}
      >
        {wowClasses[classKey]?.name}
      </span>
    </>
  );
}
