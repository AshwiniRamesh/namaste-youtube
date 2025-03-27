import React from "react";
import Button from "./Button";
import { constants } from "../utils/constants";

export default function ButtonList() {
  const buttonsList = constants.buttonsList;
  if (!buttonsList.length) return null;

  return (
    <div className="flex overflow-x-auto whitespace-nowrap space-x-3 p-2 bg-white shadow-md fixed top-[80px] w-full z-10 no-scrollbar">
      {buttonsList.map((item, index) => (
        <Button key={index} buttonItem={item} />
      ))}
    </div>
  );
}
