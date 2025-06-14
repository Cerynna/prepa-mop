import type { Role, CompositionSlot } from "./types";

export const wowClasses = {
  deathknight: {
    name: "Chevalier de la mort",
    color: "#c41f3b",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/deathknight.png",
    specs: [
      {
        name: "blood",
        role: "tank",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/deathknight/blood.png",
      },
      {
        name: "frost",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/deathknight/frost.png",
      },
      {
        name: "unholy",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/deathknight/unholy.png",
      },
    ],
  },
  druid: {
    name: "Druide",
    color: "#ff7d0a",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/druid.png",
    specs: [
      {
        name: "balance",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/druid/balance.png",
      },
      {
        name: "feral",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/druid/feral.png",
      },
      {
        name: "guardian",
        role: "tank",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/druid/guardian.png",
      },
      {
        name: "restoration",
        role: "heal",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/druid/restoration.png",
      },
    ],
  },
  hunter: {
    name: "Chasseur",
    color: "#abd473",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/hunter.png",
    specs: [
      {
        name: "beastmastery",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/hunter/beastmastery.png",
      },
      {
        name: "marksmanship",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/hunter/marksman.png",
      },
      {
        name: "survival",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/hunter/survival.png",
      },
    ],
  },
  mage: {
    name: "Mage",
    color: "#69ccf0",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/mage.png",
    specs: [
      {
        name: "arcane",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/mage/arcane.png",
      },
      {
        name: "fire",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/mage/fire.png",
      },
      {
        name: "frost",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/mage/frost.png",
      },
    ],
  },
  monk: {
    name: "Moine",
    color: "#00ff98",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/monk.png",
    specs: [
      {
        name: "brewmaster",
        role: "tank",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/monk/brewmaster.png",
      },
      {
        name: "mistweaver",
        role: "heal",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/monk/mistweaver.png",
      },
      {
        name: "windwalker",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/monk/windwalker.png",
      },
    ],
  },
  paladin: {
    name: "Paladin",
    color: "#f58cba",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/paladin.png",
    specs: [
      {
        name: "holy",
        role: "heal",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/paladin/holy.png",
      },
      {
        name: "protection",
        role: "tank",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/paladin/protection.png",
      },
      {
        name: "retribution",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/paladin/retribution.png",
      },
    ],
  },
  priest: {
    name: "Prètre",
    color: "#ffffff",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/priest.png",
    specs: [
      {
        name: "discipline",
        role: "heal",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/priest/discipline.png",
      },
      {
        name: "holy",
        role: "heal",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/priest/holy.png",
      },
      {
        name: "shadow",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/priest/shadow.png",
      },
    ],
  },
  rogue: {
    name: "Voleur",
    color: "#fff569",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/rogue.png",
    specs: [
      {
        name: "assassination",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/rogue/assassination.png",
      },
      {
        name: "combat",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/rogue/combat.png",
      },
      {
        name: "subtlety",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/rogue/subtlety.png",
      },
    ],
  },
  shaman: {
    name: "Chaman",
    color: "#0070dd",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/shaman.png",
    specs: [
      {
        name: "elemental",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/shaman/elemental.png",
      },
      {
        name: "enhancement",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/shaman/enhancement.png",
      },
      {
        name: "restoration",
        role: "heal",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/shaman/restoration.png",
      },
    ],
  },
  warlock: {
    name: "Démoniste",
    color: "#9482c9",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/warlock.png",
    specs: [
      {
        name: "affliction",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/warlock/affliction.png",
      },
      {
        name: "demonology",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/warlock/demonology.png",
      },
      {
        name: "destruction",
        role: "ranged",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/warlock/destruction.png",
      },
    ],
  },
  warrior: {
    name: "Guerrier",
    color: "#c79c6e",
    icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/class/64/warrior.png",
    specs: [
      {
        name: "arms",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/warrior/arms.png",
      },
      {
        name: "fury",
        role: "melee",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/warrior/fury.png",
      },
      {
        name: "protection",
        role: "tank",
        icon: "https://raw.githubusercontent.com/orourkek/Wow-Icons/master/images/spec/warrior/protection.png",
      },
    ],
  },
} as const;

export const wowClassesResume = {
  tank: [
    "deathknight_blood",
    "druid_guardian",
    "monk_brewmaster",
    "paladin_protection",
    "warrior_protection",
  ],
  heal: [
    "druid_restoration",
    "monk_mistweaver",
    "paladin_holy",
    "priest_discipline",
    "priest_holy",
    "shaman_restoration",
  ],
  melee: [
    "deathknight_frost",
    "deathknight_unholy",
    "druid_feral",
    "monk_windwalker",
    "paladin_retribution",
    "rogue_assassination",
    "rogue_combat",
    "rogue_subtlety",
    "shaman_enhancement",
    "warrior_arms",
    "warrior_fury",
  ],
  ranged: [
    "druid_balance",
    "hunter_beastmastery",
    "hunter_marksmanship",
    "hunter_survival",
    "mage_arcane",
    "mage_fire",
    "mage_frost",
    "priest_shadow",
    "shaman_elemental",
    "warlock_affliction",
    "warlock_demonology",
    "warlock_destruction",
  ],
};

export const perfectComposition = {
  tank: [
    {
      class: "deathknight",
      spec: "blood",
      mandatory: true,
    },
    {
      class: "monk",
      spec: "brewmaster",
      mandatory: true,
    },
  ],
  heal: [
    {
      class: "priest",
      spec: "discipline",
      mandatory: true,
    },
    {
      class: "priest",
      spec: "discipline",
      mandatory: true,
    },
    {
      class: "shaman",
      spec: "restoration",
      mandatory: true,
    },
    {
      class: "shaman",
      spec: "restoration",
      mandatory: true,
    },
  ],
  melee: [
    {
      class: "warrior",
      spec: "arms",
      mandatory: true,
    },
    {
      class: "warrior",
      spec: "arms",
      mandatory: true,
    },
    {
      class: "warrior",
      spec: "arms",
      mandatory: true,
    },
    {
      class: "deathknight",
      spec: "unholy",
      mandatory: true,
    },
    {
      class: "deathknight",
      spec: "unholy",
      mandatory: true,
    },
    {
      class: "deathknight",
      spec: "unholy",
    },
    {
      class: "rogue",
      spec: "assassination",
      mandatory: true,
    },
    {
      class: "shaman",
      spec: "enhancement",
    },
  ],
  ranged: [
    {
      class: "hunter",
      spec: "beastmastery",
      mandatory: true,
    },
    {
      class: "hunter",
      spec: "beastmastery",
      mandatory: true,
    },
    {
      class: "hunter",
      spec: "survival",
      mandatory: true,
    },
    {
      class: "hunter",
      spec: "survival",
    },
    {
      class: "mage",
      spec: "frost",
      mandatory: true,
    },
    {
      class: "mage",
      spec: "frost",
      mandatory: true,
    },
    {
      class: "shaman",
      spec: "elemental",
      mandatory: true,
    },
    {
      class: "shaman",
      spec: "elemental",
    },
    {
      class: "warlock",
      spec: "destruction",
      mandatory: true,
    },
    {
      class: "priest",
      spec: "shadow",
      mandatory: true,
    },
    {
      class: "druid",
      spec: "balance",
    },
  ],
} as Record<Role, CompositionSlot[]>;
