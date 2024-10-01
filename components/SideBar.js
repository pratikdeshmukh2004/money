
import classNames from "@/constants/custom";
import { faCartShopping, faCircleInfo, faCommentDots, faFileLines, faGear, faMoneyBill, faSquarePollVertical, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const SideBar = ({ user }) => {
  const router = useRouter()
  const menuList = [
    {
      title: "Dashboard",
      icon: faSquarePollVertical,
      link: "/",
    },
    {
      title: "Expences",
      icon: faCartShopping,
      link: "/expences",
    },
    {
      title: "Travel",
      icon: faFileLines,
      link: "/travel",
    },
    {
      title: "Reimbursment",
      icon: faCommentDots,
      link: "/reimbursment",
    },
  ];
  const activeMenu = router.asPath;

  const othersList= [
    {
      title:'Settings',
      icon: faGear,
      link:'/settings'
    },
    {
      title:'Payments',
      icon: faMoneyBill,
      link:'/payments'
    }
    ,{
      title:'Accounts',
      icon: faUser,
      link:'/accounts'
    },
    {
      title:'Help',
      icon: faCircleInfo,
      link:'/help'
    }

  ]

  return (
    <div className="bg-flashwhite absolute min-h-screen w-[230px] border-r border-gray-300 p-4">
      {/* Profile */}
      <div className="p-3 font-normal flex">
        <img
          src={user.picture}
          alt=""
          className=" h-10 w-10 rounded-full ring-1 ring-primary p-1"
        />
        <div className="ms-3">
        <p className="font-semibold text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">
        {user.name}</p>
          <p className="text-[10px] text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">
            {user.email}
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="font-normal w-full">
        <p className="pb-3 ml-5 mt-10 text-xs text-[#737B8B]/60 font-bold">
          MENU
        </p>
        <ul className="inline-flex gap-2 w-full flex-col">
          {menuList.map((item, index) => (
            <li
              key={index}
              className={
                "gap-3 cursor-pointer pr-16 items-center px-5 py-2 text-sm text-slate-500 truncate rounded-3xl hover:bg-white inline-flex " +
                (activeMenu == item.link ? "bg-white" : "")
              }
            >
              <FontAwesomeIcon
                className={activeMenu == item.link ? "text-primary" : ""}
                icon={item.icon}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {/* Others */}
      <div className="font-normal w-full">
        <p className="pb-3 ml-5 mt-10 text-xs text-[#737B8B]/60 font-bold">
          OTHERS
        </p>
        <ul className="inline-flex gap-2 w-full flex-col">
          {othersList.map((item, index) => (
            <li
              key={index}
              className={
                "gap-3 cursor-pointer pr-16 items-center px-5 py-2 text-sm text-slate-500 truncate rounded-3xl hover:bg-white inline-flex " +
                (activeMenu == item.link ? "bg-white" : "")
              }
            >
              <FontAwesomeIcon
                className={activeMenu == item.link ? "text-primary" : ""}
                icon={item.icon}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
{/* 
      <div className="font-normal w-full">
        <p className="pb-3 ml-5 mt-10 text-xs text-[#737B8B]/60 font-bold">
          Others
        </p>
        <ul className="inline-flex gap-2 flex-col">
          {othersList.map((item, index) => (
            <li
              key={index}
              className={classNames(
                "gap-3 cursor-pointer pr-16 items-center px-5 py-2 text-sm text-slate-500 truncate rounded-3xl hover:bg-white inline-flex",
                activeMenu == item.title && "bg-white"
              )}
            >
              <FontAwesomeIcon
                className={activeMenu == item.title ? "text-primary" : ""}
                icon={item.icon}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div> */}

    </div>
  );
};

export default SideBar;
