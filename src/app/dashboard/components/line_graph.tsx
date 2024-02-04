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
           <div className="tw-absolute !tw-z-40 tw-flex tw-gap-1 tw-place-items-center tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className={`tw-select-none tw-size-4 tw-rounded tw-font-semibold`}
              style={{ backgroundColor: val.point.color }}
            />
            <br />
            <span className="tw-font-semibold">{val.point.serieId}:</span>
            <span> {val.point.data.xFormatted} - {val.point.data.yFormatted}</span>
          </div>
        );
      }}
      useMesh={true}
    ></ResponsiveLine>
  );
}
