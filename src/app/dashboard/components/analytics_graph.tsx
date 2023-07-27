"use client";
import { CalendarDatum, ResponsiveCalendar } from "@nivo/calendar";
import { Line, ResponsiveLine, Serie } from "@nivo/line";
import { DefaultRawDatum, MayHaveLabel, ResponsivePie } from "@nivo/pie";

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
          <div className="tw-bg-stone-200 tw-p-4 tw-rounded-md !tw-z-40 tw-block">
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

export function ActivityGraph({ data }: { data: CalendarDatum[] }) {
  return (
    <ResponsiveCalendar
      data={data}
      from={data[0].day}
      minValue={"auto"}
      monthBorderWidth={2}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      monthBorderColor="#ffffff"
      emptyColor="#eeeeee"
      to={data[data.length - 1].day}
    />
  );
}

export function StorageGraph({ data }: { data: MayHaveLabel[] }) {
  return (
    <ResponsivePie
      data={data}
      innerRadius={0.5}
      cornerRadius={6}
      colors={{ scheme: "accent" }}
      enableArcLabels={false}
    />
  );
}
