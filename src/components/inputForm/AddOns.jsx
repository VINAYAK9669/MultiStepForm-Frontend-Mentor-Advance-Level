/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Button from "../ui-components/Button";
import NavList from "../ui-components/NavList";
import { price } from "../Slices/planSlice";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddOn, setaddOnDetail } from "../Slices/addOnSlice";

const ADD_DATA = [
  {
    id: 0,
    addName: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  {
    id: 1,
    addName: "Larger Storage",
    description: "Access to multiplayer games",
    price: 2,
  },
  {
    id: 2,
    addName: "Customizable Profile",
    description: "Access to multiplayer games",
    price: 2,
  },
];

function AddOns() {
  const dispatch = useDispatch();
  const sliceList = useSelector((state) => state.addOn.addList);

  const idArray = sliceList.map((cur) => cur.id);

  function updateAddList(newObj) {
    dispatch(setaddOnDetail(newObj));
  }

  function deleteFromAddList(id) {
    dispatch(deleteAddOn(id));
  }

  function checkBoxHandler(e) {
    const status = e.target.checked;
    const id = e.target.id;
    const name = e.target.dataset.addname;
    const price = e.target.dataset.price;
    const newObj = { id, name, price };

    if (status) {
      updateAddList(newObj);
    } else {
      deleteFromAddList(id);
    }
  }
  return (
    <>
      <div className="relative box-border grid max-w-[800px] grid-flow-row  md:grid-flow-col md:grid-cols-8  md:gap-8 bg-neutral-White md:p-3 h-[100dvh] md:h-[55dvh]">
        <NavList />

        <div className="relative col-span-5 bg-neutral-White px-[2rem] flex flex-col py-2 box-border max-w-[800px] mt-[-3rem] md:mt-[0rem]  ">
          <div className="flex flex-col   py-4">
            <div>
              <h1 className="text-[1.6rem] font-bold">Pick add-ons</h1>
              <p className="text-[16px] text-neutral-Cool-gray">
                Add-ons help enhance your gaming experience. &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
          {ADD_DATA.map((card) => (
            <div
              className="mt-4 border px-5 w-full border-primary-Marine-blue rounded-md py-2"
              key={card.id}
            >
              <div
                className={`${"___parentDiv____"} {
                    "____service____" ? "bg-neutral-Magnolia" : ""
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-5 justify-center items-center">
                    <input
                      type="checkbox"
                      id={card.id}
                      onChange={(e) => checkBoxHandler(e)}
                      data-addname={card.addName}
                      data-price={card.price}
                      checked={idArray.includes(card.id.toString())}
                    ></input>
                    <div className="flex flex-col gap-0 justify-center">
                      <h6 className="text-primary-Marine-blue font-medium">
                        {card.addName}
                      </h6>
                      <div>
                        <p>{card.description}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-primary-Purplish-blue font-semibold">
                    +${card.price}/mo
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-neutral-White p-2 w-full ">
            <Button backButton={true} prevStep="/plans" nextStep="/summary" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddOns;
