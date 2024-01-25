/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "../ui-components/Button";
import NavList from "../ui-components/NavList";
import PlanCard from "../ui-components/PlanCard";

const plans = [
  {
    id: 0,
    name: "Arcade",
    icon: "/assets/images/icon-arcade.svg",
    price: 9,
  },
  {
    id: 1,
    name: "Advanced",
    icon: "/assets/images/icon-advanced.svg",
    price: 12,
  },
  {
    id: 2,
    name: "Pro",
    icon: "/assets/images/icon-pro.svg",
    price: 15,
  },
];

function Plan() {
  const [slidePlan, setSlidePlan] = useState("monthly");

  return (
    <>
      <div className="relative box-border grid max-w-[800px] grid-flow-row  md:grid-flow-col md:grid-cols-8  md:gap-8 bg-neutral-White md:p-3 h-[100dvh] md:h-[60vh]">
        <NavList />
        <div className="relative col-span-5 bg-neutral-White px-[2rem] flex flex-col py-2 mt-[-3rem] md:mt-0">
          <div className="flex flex-col justify-center  py-4">
            <div>
              <h1 className="text-[1.6rem] font-bold">Select your plan</h1>
              <p className="text-[16px] text-neutral-Cool-gray">
                You have the option of monthly or yearly billing.
              </p>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="flex flex-col md:flex-row md:justify-evenly w-full gap-4">
              {plans.map((curPlan) => (
                <PlanCard
                  icon={curPlan.icon}
                  planName={curPlan.name}
                  planPrice={curPlan.price}
                  key={curPlan.id}
                  id={curPlan.id}
                />
              ))}
            </div>
            <div className="w-full flex justify-center items-center mt-5  border p-2 gap-4 rounded-md bg-neutral-Magnolia">
              <span
                onClick={() => setSlidePlan("monthly")}
                className="hover:cursor-pointer"
              >
                Monthly
              </span>
              <span
                className="w-[50px] h-[18px] bg-primary-Marine-blue rounded-full py-3 relative"
                onClick={() =>
                  slidePlan === "monthly"
                    ? setSlidePlan("yearly")
                    : setSlidePlan("monthly")
                }
              >
                <span
                  className={`transition duration-300  absolute w-[16px] h-[16px] bg-slate-50 top-[50%] translate-y-[-50%] ${
                    slidePlan === "monthly" ? " left-1" : " right-1"
                  } rounded-full`}
                ></span>
              </span>
              <span
                onClick={() => setSlidePlan("yearly")}
                className="hover:cursor-pointer"
              >
                Yearly
              </span>
            </div>
          </div>
          <div className="bg-neutral-White p-2 w-full ">
            <Button backButton={true} prevStep="/" nextStep="/add-ons" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
