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
          // ! HOTFIX for nivo tooltip jitter bug - [tw-absolute tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full]
          <div className="tw-absolute !tw-z-40 tw-block tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className={`tw-select-none tw-px-6 tw-py-1 tw-font-semibold`}
              style={{ backgroundColor: val.datum.color }}
            />
            <br />
            <span className="tw-font-semibold">{val.datum.label}:</span>
            <span> {val.datum.formattedValue} GB</span>
          </div>
        );
      }}
    />
  );
}
