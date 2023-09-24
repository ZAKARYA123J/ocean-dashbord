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
      padding={0.15}
      borderRadius={3}
      enableLabel={false}
      margin={{ left: 10, right: 10 }}
      tooltip={(val) => {
        return (
          <div className="!tw-z-40 tw-block tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className="tw-select-none tw-font-semibold"
              style={{
                color: "" + val.color,
                backgroundColor: val.color,
              }}
            >
              Color
            </span>
            <br />
            <span className="tw-font-semibold">{val.label}:</span>
            <span> ${val.formattedValue}</span>
          </div>
        );
      }}
    />
  );
}