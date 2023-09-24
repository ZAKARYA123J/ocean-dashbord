"use client";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { CalendarDatum, ResponsiveCalendar } from "@nivo/calendar";
import { ResponsiveLine, Serie } from "@nivo/line";
import { MayHaveLabel, ResponsivePie } from "@nivo/pie";

export function AnalyticsOverviewGraph({ data }: { data: Serie[] }) {
  return (
    <ResponsiveLine
      data={data}
      enableArea={true}
      pointBorderWidth={2}
      enableGridX={false}
      enableGridY={false}
      tooltip={(val) => {
        return (
          <div className="!tw-z-40 tw-block tw-rounded-md tw-bg-slate-200 tw-p-4 dark:tw-bg-slate-700">
            <span
              className="tw-font-semibold"
              style={{ color: val.point.color }}
            >
              [{val.point.serieId}]
            </span>
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
      theme={{ textColor: "var(--text-primary-light)" }}
      monthBorderWidth={2}
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
      dayBorderWidth={2}
      dayBorderColor="#cffafe"
      monthBorderColor="#67e8f9"
      emptyColor="#a5f3fc"
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

export function BillingGraph({ data }: { data: BarDatum[] }) {
  return (
    <ResponsiveBar
      data={data}
      indexBy="Month"
      keys={["billCost"]}
      colorBy="indexValue"
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
      enableGridY={false}
      enableLabel={false}
      margin={{ left: 64, bottom: 10, right: 32 }}
    />
  );
}
