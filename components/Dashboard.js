import React from 'react'

import { BsCartDashFill } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdOutlineInsertChart, MdHelpCenter, MdAccountCircle, MdOutlinePayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

const Dashboards = () => {
  const menuList = [
    {
      title: 'Dashboard',
      icon: faSquarePollVertical,
      link: '/'
    },
    {
      title: 'Expences',
      icon: BsCartDashFill,
      link: '/expences'
    },
    {
      title: 'Travel',
      icon: SiGoogledocs,
      link: '/travel'
    },
    {
      title: 'Reimbursment',
      icon: IoChatbubbleEllipses,
      link: '/reimbursment'
    }
  ]
  const activeMenu = 'Dashboard'

  return (
    <div className='bg-flashwhite absolute min-h-screen max-w-[230px] border-r border-gray-300 p-4'>
      {/* Profile */}
      <div className="p-3 font-normal flex">
        <img
          src="image 10.png"
          alt=""
          className=" h-10 w-10 rounded-full ring-1 ring-primary p-1"
        />
        <div className="ms-3">
          <p className="font-semibold text-slate-600">Andi Jonhson</p>
          <p className="text-xs font-medium text-slate-500">Software devloper</p>
        </div>
      </div>

      {/* Menu */}
      <div className="font-normal ">
        <p className="pb-3 ml-5 mt-10 text-xs text-[#737B8B]/60 font-bold">MENU</p>
        <ul className="inline-flex gap-2 flex-col">
          {menuList.map((item, index) => (
            <li key={index} className={"gap-3 cursor-pointer pr-20 items-center px-5 py-2 text-sm text-slate-500 truncate rounded-3xl hover:bg-white inline-flex "+ (activeMenu == item.title? "bg-white":"")}>
              <FontAwesomeIcon className={(activeMenu == item.title? "text-primary":"")} icon={item.icon}/>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Others */}

      <div className="p-5">
        <p className="pb-3 text-xs font-medium  text-slate-500">OTHERS</p>
        <ul className="inline-flex flex-col">
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            <IoMdSettings className="mt-1 me-2" />
            Settings
          </li>
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            {" "}
            <MdOutlinePayments className="mt-1 me-2" />
            Pyaments
          </li>
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            {" "}
            <MdAccountCircle className="mt-1 me-2" />
            Accounts
          </li>
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            <MdHelpCenter className="mt-1 me-2" />
            Help
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboards;
