"use client";

import { CalendarDatum, ResponsiveTimeRange } from "@nivo/calendar";
import { useTheme } from "next-themes";

export default function ActivityGraph({ data }: { data: CalendarDatum[] }) {
  const { theme } = useTheme();
  return (
    <ResponsiveTimeRange
    from={"2024-01-13"}
    to={"2024-06-30"}
      data={data}
      theme={{
        text: {
          fill: "var(--text-graph)",
        },
      }}
      dayRadius={2}
      daySpacing={4}
      margin={{ top: 25 }}
      colors={[
        "#FABAB0",
        "#F8ACA0",
        "#F79E90",
        "#F69180",
        "#F58370",
        "#F47560",
      ]}
      emptyColor={theme == "light" ? "#cbd5e1" : "#64748b"}
      dayBorderColor=""
      tooltip={(val) => {
        return (
          // ! HOTFIX for nivo tooltip jitter bug - [tw-absolute tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full]
          <div className="tw-absolute !tw-z-40 tw-block -tw-translate-x-full -tw-translate-y-full tw-break-words tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className={`tw-select-none tw-px-6 tw-py-1 tw-font-semibold`}
              style={{ backgroundColor: val.color }}
            />
            <br />
            <span className="tw-font-semibold">{val.day}:</span>
            <span> {val.value}</span>
          </div>
        );
      }}
    />
  );
}
