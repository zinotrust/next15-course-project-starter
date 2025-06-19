// app/components/sidebar/menu.js
import { FaTh, FaDollarSign, FaCog, FaUsersGear } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { MdManageHistory, MdOndemandVideo } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const menuItems = [
  {
    title: "Dashboard",
    icon: <FaTh size={18} />,
    path: "/dashboard",
  },
  // {
  //   title: "Account",
  //   icon: <BiUserCircle size={18} />,
  //   path: "/dashboard/account",
  // },
//   {
//     title: "Payments",
//     icon: <FaDollarSign size={18} />,
//     path: "/dashboard/payments",
//   },
//   {
//     title: "Content",
//     icon: <MdOndemandVideo size={18} />,
//     path: "/dashboard/content",
//   },
//   {
//     title: "Live Sessions",
//     icon: <IoVideocamOutline size={18} />,
//     path: "/dashboard/live-sessions",
//   },
//   {
//     title: "User Management",
//     icon: <FaUsersGear size={18} />,
//     path: "/dashboard/users",
//   },
//   {
//     title: "History",
//     icon: <MdManageHistory size={18} />,
//     path: "/dashboard/history",
//   },
  {
    title: "Settings",
    icon: <FaCog size={18} />,
    path: "/dashboard/settings",
  },
];

export const toggleIcons = {
  expanded: <FiChevronLeft size={20} />,
  collapsed: <FiChevronRight size={20} />,
};