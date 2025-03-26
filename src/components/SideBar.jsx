import React from "react";
import { constants } from "../utils/constants";

export default function SideBar() {
  const menuItems = constants.sideBarMenuItems;
  if (!menuItems.length) return null;

  return (
    <div className="p-4 w-60 bg-gray-100 min-h-screen">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-4">
          {item.heading && (
            <h1 className="text-lg font-bold">{item.heading}</h1>
          )}
          <ul className="list-none">
            {item.listItems.map((category, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-3 text-gray-700 hover:text-black cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
              >
                {/* Apply red color only for "More from YouTube" icons */}
                <span
                  className={`text-xl ${
                    item.heading === "More from YouTube" ? "text-red-600" : ""
                  }`}
                >
                  {category.icon}
                </span>
                <span>{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
