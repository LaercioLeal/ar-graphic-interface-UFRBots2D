import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { animated } from "@react-spring/web";

import * as S from "../GraphSum/styles";
import { defs, fill } from "./config";
import themes from "Provider/themes";

const COLORS_TAG = {
  gf: themes.colors.green,
  gs: themes.colors.primary,
};

function GraphPoints({ resume }) {
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
        id: "GOLS FEITOS",
        color: COLORS_TAG.gf,
        label: "GOLS FEITOS",
        value: resume.gf,
      },
      {
        id: "GOLS SOFRIDOS",
        color: COLORS_TAG.gs,
        label: "GOLS SOFRIDOS",
        value: resume.gs,
      },
    ].filter((item) => item.value > 0);
  };

  return (
    <S.Container>
      <ResponsivePie
        data={parseResumeData(resume)}
        margin={{ top: 40, right: 100, bottom: 80, left: 100 }}
        innerRadius={0.3}
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
        defs={defs}
        fill={fill}
        layers={["arcs", "arcLabels", "arcLinkLabels", "legends"]}
      />
    </S.Container>
  );
}

export default GraphPoints;
