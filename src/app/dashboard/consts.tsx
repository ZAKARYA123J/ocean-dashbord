import { ImStatsDots } from "react-icons/im";
import { CgDatabase } from "react-icons/cg";
import { GoLog } from "react-icons/go";
import { BsPlugin } from "react-icons/bs";
import { IoCloud, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import { TbCirclesRelation } from "react-icons/tb";
import { RiBankCardLine } from "react-icons/ri";
import { MdOutlineWidthFull } from "react-icons/md";
export const routes = [
  { routeName: "Analytics", path: "/dashboard", icon: <ImStatsDots /> },
  // { routeName: "Users", path: "/dashboard/users", icon: <FaRegUser /> },
  
  {
    routeName: "Devis",
    path: "/dashboard/devis",
    icon: <FaFileContract />,
  },
  // { routeName: "Logs", path: "/dashboard/logs", icon: <GoLog /> },
  { routeName: "Factures", path: "/dashboard/facture", icon: <RiBankCardLine /> },
  { routeName: "Surface", path: "/dashboard/surface", icon: <MdOutlineWidthFull /> },
  // { routeName: "Storage", path: "/dashboard/storage", icon: <IoCloud /> },

  // {
  //   routeName: "Settings",
  //   icon: <IoSettingsOutline />,
  //   path: "/dashboard/settings",
  // },
];

export const defaultGraphScheme = "paired";
