"use client";

import { BarDatum, ResponsiveBar } from "@nivo/bar";

export default function BillingGraph({ data }: { data: BarDatum[] }) {
  return (
    <ResponsiveBar
      data={data}
      indexBy="Month"
      keys={["billCost"]}
      colorBy="indexValue"
      axisLeft={null}
      axisBottom={null}
      enableGridY={false}
      borderRadius={3}
      enableLabel={false}
      margin={{ left: 10, right: 10 }}
      tooltip={(val) => {
        return (
          // ! HOTFIX for nivo tooltip jitter bug - [tw-absolute tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full]
          <div className="tw-absolute !tw-z-40 tw-flex tw-gap-1 tw-place-items-center tw-min-w-max -tw-translate-x-full -tw-translate-y-full tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className={`tw-select-none tw-size-4 tw-rounded tw-font-semibold`}
              style={{ backgroundColor: val.color }}
            />
            <br />
            <span className="tw-font-semibold">{val.label}:</span>
            <span> ${val.formattedValue}</span>
          </div>
        );
      }}
    />
  );
}
