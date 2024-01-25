/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../ui-components/Button";
import NavList from "../ui-components/NavList";
import checkMarkIcon from "/assets/images/icon-thank-you.svg";
import { useSelector } from "react-redux";

function FinishingUp() {
  const [finalPage, setFinalPage] = useState(false);
  const { price, name } = useSelector((state) => state.planInfo);
  const sliceList = useSelector((state) => state.addOn.addList);

  const addOnsPrice = sliceList.reduce((totalcount, curElme) => {
    return totalcount + Number(curElme.price);
  }, 0);

  const totalPrice = addOnsPrice + price;

  return (
    <>
      <div className="relative box-border grid max-w-[800px] grid-flow-row  md:grid-flow-col md:grid-cols-8  md:gap-8 bg-neutral-White md:p-3 h-[100dvh] md:h-[60dvh]">
        <NavList />
        <div className="relative col-span-5 bg-neutral-White px-[2rem] flex flex-col md: py-2 mt-[-10rem] md:mt-0">
          {!finalPage ? (
            <>
              <div className="flex flex-col justify-center  py-4">
                <div>
                  <h1 className="text-[1.6rem] font-bold">Finishing Up</h1>
                  <p className="text-[16px] text-neutral-Cool-gray">
                    Double-check everything looks OK before conforming
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="flex flex-col px-4 py-2 rounded-md   bg-neutral-Magnolia">
                  <div className="flex justify-between  mb-4 items-center">
                    <div className="flex flex-col">
                      <h2>{name} (Monthly)</h2>
                      <p>Change</p>
                    </div>
                    <p className="text-primary-Marine-blue font-semibold">
                      ${price}/yr
                    </p>
                  </div>
                  <hr></hr>
                  <div className="flex flex-col justify-between w-full mt-3">
                    {sliceList.map((curAdd) => (
                      <div className="flex justify-between " key={curAdd.id}>
                        <p className="text-neutral-Cool-gray mb-2">
                          {curAdd.name}
                        </p>
                        <p className="">+${curAdd.price}/yr</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 px-4 flex justify-between">
                  <p className="text-neutral-Cool-gray">Total (per year)</p>
                  <p className="text-primary-Purplish-blue font-bold text-[1.2rem]">
                    +${totalPrice}/yr
                  </p>
                </div>
              </div>
              <div className="bg-neutral-White p-2 w-full ">
                <Button
                  backButton={true}
                  prevStep="/add-ons"
                  nextStep="/summary"
                  formType="finish"
                  setFinalPage={setFinalPage}
                />
              </div>
            </>
          ) : (
            <div className="w-full mt-4 flex flex-col justify-center items-center h-full gap-2">
              <img src={checkMarkIcon}></img>
              <h1 className="font-bold text-[2rem]">Thank You!</h1>
              <p className="text-neutral-Cool-gray text-center font-normal text-[0.8rem]">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FinishingUp;

//  <Button backButton={true} prevStep="/add-ons" nextStep="/summary" />
