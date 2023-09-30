import { ImStatsDots } from "react-icons/im";
import { CgDatabase } from "react-icons/cg";
import { GoLog } from "react-icons/go";
import { BsPlugin } from "react-icons/bs";
import { IoCloud, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export const routes = [
  { routeName: "Analytics", path: "/dashboard", icon: <ImStatsDots /> },
  { routeName: "Users", path: "/dashboard/users", icon: <FaRegUser /> },
  { routeName: "Database", path: "/dashboard/database", icon: <CgDatabase /> },
  { routeName: "Storage", path: "/dashboard/storage", icon: <IoCloud /> },
  {
    routeName: "Integrations",
    path: "/dashboard/integrations",
    icon: <BsPlugin />,
  },
  {
    routeName: "Settings",
    path: "/dashboard/settings",
    icon: <IoSettingsOutline />,
  },
  { routeName: "Logs", path: "/dashboard/logs", icon: <GoLog /> },
];
