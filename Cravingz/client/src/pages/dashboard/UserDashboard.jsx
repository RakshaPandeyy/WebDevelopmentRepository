import React from "react";
import { useState } from "react";
import SideBar from "../../components/userDashboard/SideBar";
import Transaction from "../../components/userDashboard/Transaction";
import Overview from "../../components/userDashboard/Overview";
import Profile from "../../components/userDashboard/Profile";
import Order from "../../components/userDashboard/Order";
import Helpdesk from "../../components/userDashboard/Helpdesk";

const Userdashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full flex h-[90vh]">
      <div
        className={`bg-(--color-background) duration-300 ${
          isCollapsed ? "w-2/60" : "w-12/60"
        }`}
      >
        <SideBar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>
      <div className="border w-8/10">
        {active === "overview" && <Overview />}
        {active === "profile" && <Profile />}
        {active === "order" && <Order />}
        {active === "helpdesk" && <Helpdesk />}
        {active === "transaction" && <Transaction />}
      </div>
    </div>
  );
};

export default Userdashboard;
