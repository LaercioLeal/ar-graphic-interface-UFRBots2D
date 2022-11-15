export const fill = [
  {
    match: {
      id: "GOLS FEITOS",
    },
    id: "dots",
  },
  {
    match: {
      id: "GOLS SOFRIDOS",
    },
    id: "lines2",
  },
  {
    match: {
      id: "SALDO DE GOLS",
    },
    id: "lines1",
  },
];

export const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.25)",
    size: 8,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines1",
    type: "patternLines",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.25)",
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
  {
    id: "lines2",
    type: "patternLines",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.25)",
    rotation: 30,
    lineWidth: 6,
    spacing: 10,
  },
];
