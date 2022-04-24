import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import * as S from "./styles";
import { defs } from "../GraphBar/config";

function GraphSG({ dados }) {
  return (
    <S.Container>
      <ResponsiveBar
        data={dados.data}
        keys={dados.keys}
        indexBy="index"
        groupMode="grouped"
        margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "set3" }}
        defs={defs}
        fill={dados.keys.map((key, index) => {
          return {
            match: {
              id: key,
            },
            id: index % 2 === 0 ? "dots" : "lines",
          };
        })}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Combinação [C]",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Saldo de Gols [SG]",
          legendPosition: "middle",
          legendOffset: -50,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
      />
    </S.Container>
  );
}

export default GraphSG;
