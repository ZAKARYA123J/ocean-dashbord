"use client";

import { CalendarDatum, ResponsiveTimeRange } from "@nivo/calendar";
import { useTheme } from "next-themes";

export default function ActivityGraph({ data }: { data: CalendarDatum[] }) {
  const {theme} =  useTheme();
  return (
    <ResponsiveTimeRange
      data={data}
      theme={{ textColor: "var(--text-primary-light)" }}
      dayRadius={2}
      daySpacing={4}
      margin={{top: 25}}
      colors={["#F47560", "#F58370", "#F69180", "#F79E90", "#F8ACA0", "#FABAB0"]}
      emptyColor={theme == "light" ? "#cbd5e1" : "#64748b"}
      dayBorderColor=""
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
            <span className="tw-font-semibold">{val.day}:</span>
            <span> {val.value}</span>
          </div>
        );
      }}
    
    />
  );
}