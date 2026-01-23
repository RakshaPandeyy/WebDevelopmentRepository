import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { TiShoppingCart } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsLayoutSidebar } from "react-icons/bs";

const SideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "Overview", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <CgProfile /> },
    { key: "order", title: "Order", icon: <TiShoppingCart /> },
    { key: "transaction", title: "Transaction", icon: <GiTakeMyMoney /> },
    { key: "helpdesk", title: "Helpdesk", icon: <RiCustomerService2Fill /> },
  ];
  return (
    <>
      <div className="p-2">
        <div className="h-10 text-xl font-bold p-2 flex items-center gap-5">
          <button
            className="hover:scale-105 bolder"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {" "}
            <BsLayoutSidebar />
          </button>
          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap">User Dashboard</span>
          )}
          
        </div>
        <hr />
        <div className="py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              className={`flex gap-3 items-center ps-2 rounded-xl h-12 w-full text-nowrap overflow-hidden duration-300
                ${
                  active === item.key
                    ? "bg-(--color-secondary) text-white"
                    : "hover:bg-gray-100/70 "
                } 
              `}
              onClick={() => setActive(item.key)}
              key={idx}
            >
              {" "}
              {item.icon}
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
