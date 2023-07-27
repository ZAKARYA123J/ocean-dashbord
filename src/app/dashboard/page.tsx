import {
  ActivityGraph,
  AnalyticsOverviewGraph,
  StorageGraph,
} from "./components/analytics_graph";
import {
  activity_graph_data,
  database_graph_data,
  storage_graph_data,
  user_graph_data,
} from "./components/graph_data";

export default function Home() {
  return (
    <>
      <div
        className="tw-bg-stone-100 dark:tw-bg-slate-900"
        style={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        <div className="tw-grid tw-grid-flow-row tw-grid-cols-2 tw-gap-6 tw-p-4">
          <span className="tw-max-h-60 tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-t-lg tw-col-span-full tw-shadow">
            <span className="tw-p-4 tw-text-2xl tw-block dark:tw-text-white tw-text-black">
              Users
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-t-lg tw-shadow">
            <span className="tw-p-4 tw-text-2xl tw-block dark:tw-text-white tw-text-black">
              Database Reads/Writes
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={database_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-t-lg tw-shadow">
            <span className="tw-p-4 tw-text-2xl tw-block dark:tw-text-white tw-text-black">
              Storage
            </span>
            <span className="tw-block tw-h-36 tw-mb-4">
              <StorageGraph data={storage_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-t-lg tw-shadow">
            <span className="tw-p-4 tw-text-2xl tw-block dark:tw-text-white tw-text-black">
              Activity
            </span>
            <span className="tw-block tw-h-40 tw-mx-2">
              <ActivityGraph data={activity_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded-t-lg tw-shadow">
            <span className="tw-p-4 tw-text-2xl tw-block dark:tw-text-white tw-text-black">
              Database Writes
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
