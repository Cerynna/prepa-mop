type Role = "tank" | "heal" | "melee" | "ranged";

interface Player {
  pseudo: string;
  classe1: string;
  spec1: string;
  role1: Role;
  classe2: string;
  spec2: string;
  role2: Role;
}

interface CompositionSlot {
  class: string;
  spec: string;
  mandatory?: boolean;
}

type PerfectComposition = Record<Role, CompositionSlot[]>;

interface AssignedPlayer {
  pseudo: string;
  class: string;
  spec: string;
  role: Role;
}

interface Roster {
  tank: AssignedPlayer[];
  heal: AssignedPlayer[];
  melee: AssignedPlayer[];
  ranged: AssignedPlayer[];
}

const perfectComposition: PerfectComposition = {
  tank: [
    { class: "deathknight", spec: "blood", mandatory: true },
    { class: "monk", spec: "brewmaster", mandatory: true },
  ],
  heal: [
    { class: "priest", spec: "discipline", mandatory: true },
    { class: "priest", spec: "discipline", mandatory: true },
    { class: "shaman", spec: "restoration", mandatory: true },
    { class: "shaman", spec: "restoration", mandatory: true },
  ],
  melee: [
    { class: "warrior", spec: "arms", mandatory: true },
    { class: "warrior", spec: "arms", mandatory: true },
    { class: "warrior", spec: "arms", mandatory: true },
    { class: "deathknight", spec: "unholy", mandatory: true },
    { class: "deathknight", spec: "unholy", mandatory: true },
    { class: "deathknight", spec: "unholy" },
    { class: "rogue", spec: "assassination", mandatory: true },
    { class: "shaman", spec: "enhancement" },
  ],
  ranged: [
    { class: "hunter", spec: "beastmastery", mandatory: true },
    { class: "hunter", spec: "beastmastery", mandatory: true },
    { class: "hunter", spec: "survival", mandatory: true },
    { class: "hunter", spec: "survival" },
    { class: "mage", spec: "frost", mandatory: true },
    { class: "mage", spec: "frost", mandatory: true },
    { class: "shaman", spec: "elemental", mandatory: true },
    { class: "shaman", spec: "elemental" },
    { class: "warlock", spec: "destruction", mandatory: true },
    { class: "priest", spec: "shadow", mandatory: true },
    { class: "druid", spec: "balance" },
  ],
};

// Fonction utilitaire pour évaluer la correspondance d'un joueur à un slot
function slotMatch(player: AssignedPlayer, slot: CompositionSlot): boolean {
  return player.class === slot.class && player.spec === slot.spec;
}

// Calcul de score pour un roster par rapport à perfectComposition
function evaluateRoster(roster: Roster): number {
  let score = 0;

  for (const role of Object.keys(perfectComposition) as Role[]) {
    const slots = [...perfectComposition[role]]; // copie des slots
    const assigned = roster[role];

    // On copie la liste des slots pour marquer les slots remplis
    const slotUsed = new Array(slots.length).fill(false);

    // Prioriser les slots mandatory
    for (const player of assigned) {
      // Chercher un slot non utilisé compatible
      let matchedIndex = -1;
      // D'abord chercher slot mandatory
      for (let i = 0; i < slots.length; i++) {
        if (!slotUsed[i] && slots[i].mandatory && slotMatch(player, slots[i])) {
          matchedIndex = i;
          score += 10; // gros bonus pour slot mandatory bien rempli
          break;
        }
      }
      // Sinon chercher slot non mandatory
      if (matchedIndex === -1) {
        for (let i = 0; i < slots.length; i++) {
          if (
            !slotUsed[i] &&
            !slots[i].mandatory &&
            slotMatch(player, slots[i])
          ) {
            matchedIndex = i;
            score += 3; // petit bonus pour slot non mandatory
            break;
          }
        }
      }
      // Si correspond pas, pas de score ajouté
      if (matchedIndex !== -1) slotUsed[matchedIndex] = true;
    }

    // Pénalité si slots mandatory non remplis
    for (let i = 0; i < slots.length; i++) {
      if (slots[i].mandatory && !slotUsed[i]) {
        score -= 20; // pénalité forte
      }
    }
  }

  return score;
}

// Construire un roster à partir d'un groupe de joueurs et leur version (1 ou 2)
function buildRoster(players: Player[], useVersion1For: Set<string>): Roster {
  const roster: Roster = {
    tank: [],
    heal: [],
    melee: [],
    ranged: [],
  };

  for (const player of players) {
    const useV1 = useVersion1For.has(player.pseudo);
    const p = useV1
      ? {
          pseudo: player.pseudo,
          class: player.classe1,
          spec: player.spec1,
          role: player.role1,
        }
      : {
          pseudo: player.pseudo,
          class: player.classe2,
          spec: player.spec2,
          role: player.role2,
        };

    roster[p.role].push(p);
  }

  return roster;
}

// Fonction principale pour chercher une bonne partition
export function findBestPartition(players: Player[]): {
  roster1: Roster;
  roster2: Roster;
  useVersion1For: Set<string>;
  score: number;
} {
  const N = players.length;
  const half = N / 2;

  // Tous les pseudos
  const pseudos = players.map((p) => p.pseudo);

  let bestScore = -Infinity;
  let bestSet: Set<string> = new Set();

  // Approche heuristique simple: échantillonnage aléatoire
  const maxTrials = 10000;

  for (let trial = 0; trial < maxTrials; trial++) {
    // Tirage aléatoire d'un subset de taille half
    const shuffled = pseudos.slice().sort(() => Math.random() - 0.5);
    const subset = new Set(shuffled.slice(0, half));

    // Construire roster1 avec subset en version1, le reste en version2
    const roster1 = buildRoster(players, subset);

    // Roster2 inverse les versions
    const subsetInverse = new Set(pseudos.filter((p) => !subset.has(p)));
    const roster2 = buildRoster(players, subsetInverse);

    const score1 = evaluateRoster(roster1);
    const score2 = evaluateRoster(roster2);
    const totalScore = score1 + score2;

    if (totalScore > bestScore) {
      bestScore = totalScore;
      bestSet = subset;
    }
  }

  // Construire la meilleure partition finale
  const roster1 = buildRoster(players, bestSet);
  const roster2 = buildRoster(
    players,
    new Set(pseudos.filter((p) => !bestSet.has(p)))
  );

  return { roster1, roster2, useVersion1For: bestSet, score: bestScore };
}
