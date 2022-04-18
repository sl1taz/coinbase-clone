import { RiCoinsLine, RiNotification3Line } from "react-icons/ri";

import { BiTrendingUp } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from "react-icons/ai";


export const navItems = [
  {
    title: "Assets",
    icon: <AiOutlinePieChart />,
  },
  {
    title: "Trade",
    icon: <BiTrendingUp />,
  },
  {
    title: "Pay",
    icon: <RiCoinsLine />,
  },
  {
    title: "For You",
    icon: <MdWeb />,
  },
  {
    title: "Learn and earn",
    icon: <AiOutlinePlusCircle />,
  },
  {
    title: "Notifications",
    icon: <RiNotification3Line />,
  },
  {
    title: "Invite Friends",
    icon: <BsPersonPlus />,
  },
  {
    title: "Send a gift",
    icon: <AiOutlineGift />,
  },
];
