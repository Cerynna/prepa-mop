export type Row = {
  [key: string]: string;
};

export interface Player {
  pseudo: string;
  classe1: string;
  spec1: string;
  role1: Role;
  classe2: string;
  spec2: string;
  role2: Role;
}

export interface CompositionSlot {
  class: string;
  spec: string;
  mandatory?: boolean;
}
export type Role = "tank" | "heal" | "melee" | "ranged";
