import React from 'react'

import { BsCartDashFill } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdOutlineInsertChart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";

const Dashboards = () => {
  return (
    <>
      {/* Profile */}
      <div className="p-3 font-normal bg-gray-100 flex">
        <img
          src="satish.mungusmare.jpeg"
          alt=""
          className=" h-10 w-10 rounded-full"
        />
        <div className="ms-3">
          <p className="font-semibold text-slate-600">Satish Mungusmare</p>
          <p className="text-xs text-slate-500">Software devloper</p>
        </div>
      </div>

      {/* Menu */}
      <div className="p-5 font-normal bg-gray-100 ">
        <p className="pb-3 text-xs  text-slate-500">MENU</p>
        <ul className="inline-flex flex-col">
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            <MdOutlineInsertChart className="mt-1 me-2" />
            Dashboard
          </li>
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            <BsCartDashFill className="mt-1 me-2" />
            Expences
          </li>
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            <SiGoogledocs className="mt-1 me-2" />
            Travel
          </li>
          <li className="p-2  pr-20 text-sm text-slate-500 truncate hover:rounded-3xl hover:bg-white inline-flex">
            <IoChatbubbleEllipses className="mt-1 me-2" />
            Reimbursment
          </li>
        </ul>
      </div>

      {/* Others */}

      <div className="p-5 bg-gray-100">
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
    </>
  );
};

export default Dashboards;
