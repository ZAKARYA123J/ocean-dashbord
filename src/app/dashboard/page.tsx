import dynamic from "next/dynamic";

const AnalyticsOverviewGraph = dynamic(
  () => import("@/app/dashboard/components/line_graph"),
);
const ActivityGraph = dynamic(
  () => import("@/app/dashboard/components/calendar_graph"),
);
const BillingGraph = dynamic(
  () => import("@/app/dashboard/components/bar_graph"),
);
const StorageGraph = dynamic(
  () => import("@/app/dashboard/components/pie_graph"),
);

import {
  billing_graph_data,
  database_graph_data,
  storage_graph_data,
  user_graph_data,
} from "./components/graph_data";

export default function Home() {
  return (
    <>
      <div className="tw-min-h-full-minus-header tw-bg-stone-100 dark:tw-bg-slate-900">
        <div className="tw-grid tw-grid-flow-row tw-gap-6 tw-p-5 md:tw-grid-cols-2">
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
            <span className="tw-text-600 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
              Billing
            </span>
            <span className="tw-block tw-h-40">
              <BillingGraph data={billing_graph_data} />
            </span>
          </span>
          <span className="tw-rounded-t-lg tw-bg-slate-200 tw-shadow dark:tw-bg-slate-800">
            <span className="tw-text-300 tw-block tw-select-none tw-p-4 tw-text-2xl dark:tw-text-slate-300">
              Activity
            </span>
            <span className=" tw-mx-2 tw-flex tw-flex-col tw-gap-4 tw-text-center">
              <div>
                <span className="dark:tw-text-sky-400 tw-text-sky-800 tw-block tw-text-xl  tw-uppercase">
                  Active Users
                </span>
                <span className="tw-text-lg">3232</span>
              </div>
              <div>
                <span className="dark:tw-text-sky-400 tw-text-sky-800 tw-block tw-text-xl  tw-uppercase">
                  User Retention
                </span>
                <span className="tw-text-lg">65.4%</span>
              </div>
            </span>
          </span>
          
        </div>
      </div>
    </>
  );
}
