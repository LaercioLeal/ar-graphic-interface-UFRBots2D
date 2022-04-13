import React from "react";
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
        id: "victories",
        color: S.COLORS_TAG.victories,
        label: "victories",
        value: resume.victories,
      },
      {
        id: "defeats",
        color: S.COLORS_TAG.defeats,
        label: "defeats",
        value: resume.defeats,
      },
      {
        id: "draws",
        color: S.COLORS_TAG.draws,
        label: "draws",
        value: resume.draws,
      },
    ];
  };

  // const CenteredMetric = useCallback(
  //   ({ centerX, centerY }) => {
  //     return (
  //       <S.Total
  //         x={centerX}
  //         y={centerY}
  //         textAnchor="middle"
  //         dominantBaseline="central"
  //       >
  //         {total}
  //       </S.Total>
  //     );
  //   },
  //   [total]
  // );

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
        arcLinkLabelsTextColor={themes.colors.black}
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: "color", modifiers: [] }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [] }}
        // custom
        colors={{ datum: "data.color" }}
        startAngle={-100}
        arcLabelsComponent={({ datum, label, style }) => (
          <LabelComponent datum={datum} label={label} style={style} />
        )}
        // custom
        defs={defs}
        fill={fill}
        layers={[
          "arcs",
          "arcLabels",
          "arcLinkLabels",
          "legends",
          // CenteredMetric,
        ]}
      />
    </S.Container>
  );
}

export default GraphSum;
