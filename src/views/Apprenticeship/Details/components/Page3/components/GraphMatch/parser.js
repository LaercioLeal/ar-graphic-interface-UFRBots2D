import themes from "Provider/themes";

export const parserData = (results) => {
  let gf = [],
    gs = [],
    sg = [];
  for (const item of results) {
    gf.push({
      x: item.orderR - 1,
      y: item.gf,
    });
    gs.push({
      x: item.orderR - 1,
      y: item.gs,
    });
    sg.push({
      x: item.orderR - 1,
      y: item.sg,
    });
  }
  const data = [
    {
      id: "GF",
      // color: "hsl(155, 82%, 44%)",
      color: themes.colors.success,
      data: gf,
    },
    {
      id: "GS",
      // color: "hsl(346, 100%, 40%)",
      color: themes.colors.danger,
      data: gs,
    },
    {
      id: "SG",
      // color: "hsl(229, 88%, 60%)",
      color: themes.colors.blue,
      data: sg,
    },
  ];
  return data;
};
