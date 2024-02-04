import { DataTable } from "../components/data_table";
import { storage_graph_data } from "../components/graph_data";
import PieGraph from "../components/pie_graph";
import { priorityColors, userColumns } from "./columns";
import { userData, Log, LogPriorities } from "./log";

export default function Logs() {
  function countLogEntries(
    logs: Log[],
  ): Record<(typeof LogPriorities)[number], number> {
     const count: Record<typeof LogPriorities[number], number> = Object.fromEntries(
        LogPriorities.map(priority => [priority, 0]) 
    ) as Record<typeof LogPriorities[number], number>;

    logs.forEach((log) => {
      count[log.priority]++;
    });

    return count;
  }

  
  const logCounts = countLogEntries(userData);
  const logCountArray = LogPriorities.map(priority => ({
    id: priority,
    label: priority,
    value: logCounts[priority],
  }));
  
  return (
    <div className="tw-min-h-full-minus-header tw-bg-stone-100 dark:tw-bg-slate-900">
      <h1 className="tw-p-4 tw-text-2xl tw-font-bold">Logs</h1>
      <div className="tw-h-44">
        <PieGraph data={logCountArray} colorMap={priorityColors} />
      </div>
      <div className="tw-p-4 ">
        <DataTable
          columns={userColumns}
          data={userData}
          filterOptions={{
            placeholder: "Filter logs by message...",
            field: "message",
          }}
          sortOptions={{ sortBy: "time" }}
        />
      </div>
    </div>
  );
}
