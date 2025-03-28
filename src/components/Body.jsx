import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import {Outlet} from 'react-router-dom'

export default function Body() {
  const toggles = useSelector((store) => store.toggles);
  const {isMenuOpen} =  toggles;
  return (
    <div className="grid grid-cols-12 h-screen pt-[60px]">
      {isMenuOpen && <div className="col-span-2 p-4">
        <SideBar />
      </div>}
      <div className="col-span-10 p-4">
        <Outlet />
      </div>
    </div>
  );
}
