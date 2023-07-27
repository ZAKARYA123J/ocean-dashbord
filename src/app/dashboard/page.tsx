import { AnalyticsOverviewGraph } from "./components/analytics_graph";
import { database_graph_data, user_graph_data } from "./components/graph_data";

export default function Home() {
  return (
    <>
      <div
        className="!tw-bg-stone-100"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        <div className="tw-grid tw-grid-flow-row tw-grid-cols-2 tw-gap-6 tw-p-4">
          <span className="tw-max-h-60 tw-bg-slate-200 tw-rounded-t-lg tw-col-span-full">
            <span className="tw-p-4 tw-text-2xl tw-block">Users</span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 tw-rounded-t-lg">
            <span className="tw-p-4 tw-text-2xl tw-block">
              Database Reads/Writes
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={database_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 tw-rounded-t-lg">
            <span className="tw-p-4 tw-text-2xl tw-block">Activity</span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 tw-rounded-t-lg">
            <span className="tw-p-4 tw-text-2xl tw-block">Storage</span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 tw-rounded-t-lg">
            <span className="tw-p-4 tw-text-2xl tw-block">Database Writes</span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
