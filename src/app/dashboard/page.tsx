import dynamic from "next/dynamic";

const AnalyticsOverviewGraph = dynamic(
  () => import("@/app/dashboard/components/analytics_graph"),
);
const ActivityGraph = dynamic(
  () => import("@/app/dashboard/components/activity_graph"),
);
const BillingGraph = dynamic(
  () => import("@/app/dashboard/components/billing_graph"),
);
const StorageGraph = dynamic(
  () => import("@/app/dashboard/components/storage_graph"),
);

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
        className="tw-bg-stone-100 dark:tw-bg-slate-900 tw-min-h-full-minus-header"
      >
        <div className="tw-grid tw-grid-flow-row sm:tw-grid-cols-2 tw-gap-6 tw-p-4">
          <span className="tw-col-span-full tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800 ">
            <span className="tw-text-300 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
              Users
            </span>
            <span className="tw-block tw-h-44">
              <AnalyticsOverviewGraph data={user_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-text-300 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
              Database Reads/Writes
            </span>
            <span className="tw-block tw-h-40">
              <AnalyticsOverviewGraph data={database_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-text-300 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
              Storage
            </span>
            <span className="tw-mb-4 tw-block tw-h-36">
              <StorageGraph data={storage_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-text-300 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
              Activity
            </span>
            <span className="tw-mx-2 tw-block tw-h-40">
              <ActivityGraph data={activity_graph_data} />
            </span>
          </span>
          <span className="tw-max-h-60 tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-text-600 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
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
