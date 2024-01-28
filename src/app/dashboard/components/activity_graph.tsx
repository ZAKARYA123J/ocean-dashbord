"use client";

import { CalendarDatum, ResponsiveTimeRange } from "@nivo/calendar";
import { useTheme } from "next-themes";

export default function ActivityGraph({ data }: { data: CalendarDatum[] }) {
  const { theme } = useTheme();
  return (
    <ResponsiveTimeRange
    align="center"
    from={"2024-01-13"}
    to={"2024-06-29"}
      data={data}
      theme={{
        text: {
          fill: "var(--text-graph)",
        },
      }}
      dayBorderWidth={1}
      dayRadius={2}
      daySpacing={4}
      weekdayLegendOffset={50}
      margin={{ top: 25 }}
      colors={[
        "#FABAB0",
        "#F8ACA0",
        "#F79E90",
        "#F69180",
        "#F2745D",
        "#F0644B",
      ]}
      emptyColor={theme == "light" ? "#cbd5e1" : "#64748b"}
      dayBorderColor="#B4B4B4"
      tooltip={(val) => {
        return (
          // ! HOTFIX for nivo tooltip jitter bug - [tw-absolute tw-min-w-max -tw-translate-x-1/2 -tw-translate-y-full]
          <div className="tw-absolute !tw-z-40 tw-flex tw-place-items-center tw-gap-1  -tw-translate-x-full -tw-translate-y-full tw-break-words tw-rounded-md tw-bg-stone-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className={`tw-select-none tw-size-4 tw-rounded tw-font-semibold`}
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
