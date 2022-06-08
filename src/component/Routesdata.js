import { BsSpeedometer } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineWechat } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdSystemUpdateAlt } from "react-icons/md";


export const  userRoutes = [
  {
    path: "profile",
    name: "Dashboard",
    icon: <BsSpeedometer />,
  },
  {
    path: "courses",
    name: "courses",
    icon: <AiOutlineLaptop />,
  },
  {
    path: "notification",
    name: "notification",
    icon: <IoMdNotificationsOutline />,
  },
  {
    path: "chat",
    name: "chat",
    icon: <AiOutlineWechat />,
  },
  {
    path: "setting",
    name: "setting",
    icon: <AiOutlineSetting />,
  },
];



export const userAdmin = [
  {
    path: "profile",
    name: "Dashboard",
    icon: <BsSpeedometer />,
  },
  {
    path: "course/add",
    name: "Add",
    icon: <AiOutlinePlusCircle />,
  },
  {
    path: "course/update",
    name: "course update",
    icon: <MdSystemUpdateAlt />,
  },

  {
    path: "setting",
    name: "setting",
    icon: <AiOutlineSetting />,
  },
];
