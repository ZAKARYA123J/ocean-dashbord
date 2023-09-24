import {
  ActivityGraph,
  AnalyticsOverviewGraph,
  BillingGraph,
  StorageGraph,
} from "./components/analytics_graph";
import {
  activity_graph_data,
  billing_graph_data,
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
        <div className="tw-grid tw-grid-flow-row tw-grid-cols-2 tw-gap-4 tw-p-4">
          <span className="tw-col-span-full tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800 ">
            <span className="tw-block tw-select-none tw-p-4 tw-text-2xl tw-text-black dark:tw-text-white">
              Users
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-block tw-select-none tw-p-4 tw-text-2xl tw-text-black dark:tw-text-white">
              Database Reads/Writes
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={database_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-block tw-select-none tw-p-4 tw-text-2xl tw-text-black dark:tw-text-white">
              Storage
            </span>
            <span className="tw-mb-4 tw-block tw-h-36">
              <StorageGraph data={storage_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-block tw-select-none tw-p-4 tw-text-2xl tw-text-black dark:tw-text-white">
              Activity
            </span>
            <span className="tw-mx-2 tw-block tw-h-40">
              <ActivityGraph data={activity_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-block tw-select-none tw-p-4 tw-text-2xl tw-text-black dark:tw-text-white">
              Billing
            </span>
            <span className="tw-block tw-h-40">
              <BillingGraph data={billing_graph_data} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
