import { ImStatsDots } from "react-icons/im";
import { CgDatabase } from "react-icons/cg";
import { GoLog } from "react-icons/go";
import { BsPlugin } from "react-icons/bs";
import { IoCloud, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export const routes = [
  { routeName: "Analytics", path: "/dashboard", icon: <ImStatsDots /> },
  { routeName: "Users", path: "/dashboard/users", icon: <FaRegUser /> },
  
  {
    routeName: "Devis",
    path: "/dashboard/integrations",
    icon: <BsPlugin />,
  },
  { routeName: "Logs", path: "/dashboard/logs", icon: <GoLog /> },
  { routeName: "Factures", path: "/dashboard/facture", icon: <CgDatabase /> },
  { routeName: "Storage", path: "/dashboard/storage", icon: <IoCloud /> },

  // {
  //   routeName: "Settings",
  //   icon: <IoSettingsOutline />,
  //   path: "/dashboard/settings",
  // },
];

export const defaultGraphScheme = "paired";
