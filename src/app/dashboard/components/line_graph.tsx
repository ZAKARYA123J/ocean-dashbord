"use client";

import { ResponsiveLine, Serie } from "@nivo/line";
import { defaultGraphScheme } from "../consts";

export default function LineGraph({ data }: { data: Serie[] }) {
  return (
    <ResponsiveLine
      curve="natural"
      colors={{scheme: defaultGraphScheme }}
      data={data}
      enableArea={true}
      margin={{ top: 20 }}
      pointSize={5}
      areaOpacity={0.15}
      enableCrosshair={false}
      pointBorderWidth={2}
      areaBlendMode="hard-light"
      enableGridX={false}
      enableGridY={false}
      tooltip={(val) => {
        return (
          <div className="!tw-z-40 tw-block tw-absolute tw-right-3 tw-rounded-md tw-bg-slate-200 tw-p-3 dark:tw-bg-slate-700">
            <span
              className="tw-font-semibold"
              style={{ color: val.point.color }}
            >
              [{val.point.serieId}]
            </span>
            <br />
            <span className="tw-font-semibold">
              {val.point.data.xFormatted}:
            </span>
            <span> {val.point.data.yFormatted}</span>
          </div>
        );
      }}
      useMesh={true}
    ></ResponsiveLine>
  );
}
