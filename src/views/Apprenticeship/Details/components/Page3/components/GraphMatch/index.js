import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

import * as S from "./styles";
import { parserData } from "./parser";
import themes from "Provider/themes";

function GraphSum({ results }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (results.length) {
      setData(parserData(results));
    }
  }, [results]);

  return (
    <S.Container>
      {data.length > 0 && (
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 60, bottom: 50, left: 50 }}
          pointSize={10}
          pointBorderWidth={2}
          pointLabelYOffset={-12}
          enableGridX={true}
          enableGridY={false}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          pointBorderColor={{
            from: "serieColor",
            modifiers: [["darker", 0.3]],
          }}
          colors={[
            themes.colors.success,
            themes.colors.danger,
            themes.colors.blue,
          ]}
          xScale={{
            type: "linear",
          }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
          }}
          enableArea={true}
          areaOpacity={0.07}
          enableSlices={false}
          crosshairType="cross"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 0,
            tickPadding: 20,
            tickRotation: 0,
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 0,
            tickPadding: 15,
            tickRotation: 0,
            legendOffset: -40,
            legendPosition: "middle",
          }}
        />
      )}
    </S.Container>
  );
}

export default GraphSum;
