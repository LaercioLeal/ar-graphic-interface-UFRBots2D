import React, { useCallback } from "react";
import { ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";

import * as S from "./styles";
import { defs, fill } from "./config";
import themes from "Provider/themes";

function GraphSum({ resume }) {
  const LabelComponent = ({ datum, label, style }) => (
    <animated.g transform={style.transform} style={{ pointerEvents: "none" }}>
      <circle fill="#ffffff" stroke={datum.color} strokeWidth={2} r={13} />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fill={style.textColor}
        style={{
          fontSize: 12,
          fontWeight: 800,
        }}
      >
        {label}
      </text>
    </animated.g>
  );

  const parseResumeData = (resume) => {
    return [
      {
        id: "VITÓRIAS",
        color: S.COLORS_TAG.victories,
        label: "VITÓRIAS",
        value: resume.victories,
      },
      {
        id: "DERROTAS",
        color: S.COLORS_TAG.defeats,
        label: "DERROTAS",
        value: resume.defeats,
      },
      {
        id: "EMPATES",
        color: S.COLORS_TAG.draws,
        label: "EMPATES",
        value: resume.draws,
      },
    ].filter((item) => item.value > 0);
  };

  return (
    <S.Container>
      <ResponsivePie
        data={parseResumeData(resume)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={2}
        cornerRadius={10}
        activeOuterRadiusOffset={16}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={{ from: "color", modifiers: [["darker", 1]] }}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color", modifiers: [] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [] }}
        // custom
        colors={{ datum: "data.color" }}
        startAngle={-100}
        LabelComponent={({ datum, label, style }) => (
          <LabelComponent datum={datum} label={label} style={style} />
        )}
        arcLabelsComponent={({ datum, label, style }) => (
          <LabelComponent datum={datum} label={label} style={style} />
        )}
        // custom
        defs={defs}
        fill={fill}
        layers={["arcs", "arcLabels", "arcLinkLabels", "legends"]}
      />
    </S.Container>
  );
}

export default GraphSum;
