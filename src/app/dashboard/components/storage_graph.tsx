"use client";

import { MayHaveLabel, ResponsivePie } from "@nivo/pie";

export default function StorageGraph({ data }: { data: MayHaveLabel[] }) {
  return (
    <ResponsivePie
      data={data}
      innerRadius={0.5}
      cornerRadius={6}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      tooltip={(val) => {
        return (
          <div className="!tw-z-40 tw-block tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className="tw-select-none tw-font-semibold"
              style={{
                color: "" + val.datum.color,
                backgroundColor: val.datum.color,
              }}
            >
              Color
            </span>
            <br />
            <span className="tw-font-semibold">{val.datum.label}:</span>
            <span> {val.datum.formattedValue} GB</span>
          </div>
        );
      }}
    />
  );
}