import { DataTable } from "../components/data_table";
import { user_graph_data } from "../components/graph_data";
import LineGraph from "../components/line_graph";
import { userColumns } from "./columns";
import { userData } from "./user";

export default function Users() {
  return (
    <div className="tw-min-h-full-minus-header tw-bg-stone-100 dark:tw-bg-slate-900">
      <h1 className="tw-p-4 tw-text-2xl tw-font-bold">Users</h1>
      {/* <div>
         <span className="tw-block tw-h-44">
              <LineGraph data={user_graph_data} />
            </span>
      </div> */}
      <div className="tw-p-4 ">
        <DataTable columns={userColumns} data={userData} filterOptions={{field: "username", placeholder: "Filter by username..."}} />
      </div>
    </div>
  );
}
