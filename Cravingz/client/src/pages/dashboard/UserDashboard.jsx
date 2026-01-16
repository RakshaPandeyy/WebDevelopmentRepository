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

  return (
    <div className="w-full flex h-[90vh]">
      <div className="w-2/10 bg-(--color-background)">
        <SideBar active={active} setActive={setActive} />
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
