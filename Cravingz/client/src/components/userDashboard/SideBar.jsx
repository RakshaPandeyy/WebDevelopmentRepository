import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";

const SideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-2">
        <div className="text-xl font-bold p-2 ">Userboard</div>
        <hr />
        <div className="grid gap-3 p-6">
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("overview")}
          >
            {" "}
            <TbChartTreemap />
            Overview
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("profile")}
          >
            <CgProfile />
            Profile
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("order")}
          >
            {" "}
            <TiShoppingCart />
            Order
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("transaction")}
          >
            <GiTakeMyMoney />
            Transaction
          </button>
          <button
            className="flex gap-3 items-center"
            onClick={() => setActive("helpdesk")}
          >
            <RiCustomerService2Fill /> Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
