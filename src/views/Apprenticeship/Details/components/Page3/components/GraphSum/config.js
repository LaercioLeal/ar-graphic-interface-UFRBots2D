export const fill = [
  {
    match: {
      id: "VITÓRIAS",
    },
    id: "lines",
  },
  {
    match: {
      id: "DERROTAS",
    },
    id: "dots",
  },
  {
    match: {
      id: "EMPATES",
    },
    id: "lines",
  },
];

export const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.25)",
    size: 4,
    padding: 1,
    stagger: true,
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.25)",
    rotation: -45,
    lineWidth: 6,
    spacing: 10,
  },
];
