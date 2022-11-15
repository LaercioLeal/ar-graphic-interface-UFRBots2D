export const fill = [
  {
    match: {
      id: "VITÓRIAS",
    },
    id: "lines1",
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
    id: "lines2",
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
    rotation: -85,
    lineWidth: 6,
    spacing: 10,
  },
  {
    id: "lines2",
    type: "patternLines",
    background: "inherit",
    color: "rgba(255, 255, 255, 0.25)",
    rotation: 0,
    lineWidth: 6,
    spacing: 10,
  },
];
