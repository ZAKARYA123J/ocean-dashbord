"use client";
import { Line, ResponsiveLine, Serie } from "@nivo/line";

export function AnalyticsOverviewGraph({ data }: { data: Serie[] }) {
  return (
    <ResponsiveLine
      colors={{ scheme: "accent" }}
      data={data}
      enableArea={true}
      pointBorderWidth={2}
      enableGridX={false}
      enableGridY={false}
      tooltip={(val) => {
        return (
          <div>
            <span className="tw-font-semibold">[{val.point.serieId}]</span>
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

export function ActivityGraph() {}
