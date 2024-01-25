/* eslint-disable no-unused-vars */
import Button from "../ui-components/Button";
import NavList from "../ui-components/NavList";

import { useSelector } from "react-redux";
import { useState } from "react";

function InputForm() {
  const { name, email, number } = useSelector((state) => state.personalInfo);

  const [userName, setName] = useState(name);
  const [userMail, setUserMail] = useState(email);
  const [userNumber, setUserNumber] = useState(number);
  const inputDetails = { userName, userMail, userNumber };

  const label = "block mb-1 text-primary-Marine-blue ";
  const input =
    "block font-medium outline outline-1 outline-neutral-Light-gray w-full px-5 py-[0.6rem] rounded-sm rounded focus:outline-none focus:ring-2 focus:ring-primary-Marine-blue focus:border-transparent";

  return (
    <>
      <div className="relative box-border grid max-w-[800px] grid-flow-row  md:grid-flow-col md:grid-cols-8  md:gap-8 bg-neutral-White md:p-3 h-[100dvh]  md:h-[55dvh]">
        <NavList />
        <div className="relative col-span-5 bg-neutral-White px-[2rem] flex flex-col md:py-2 box-border max-w-[800px] mt-[-3rem] md:mt-[0rem]  ">
          <div className="flex flex-col   md:py-4">
            <div>
              <h1 className="text-[1.6rem] font-bold">Personal info</h1>
              <p className="text-[16px] text-neutral-Cool-gray">
                Please provide your name, email, address, and phone number
              </p>
            </div>
          </div>
          <form className="w-full mt-4">
            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="userName" className={label}>
                  Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className={input}
                  placeholder="eg: Vinayak Kittad"
                  required
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className={label}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="eg: vinay.reactdeveloper@gmail.com"
                  className={input}
                  value={userMail}
                  onChange={(e) => setUserMail(e.target.value)}
                />
              </div>
              <div htmlFor="phoneNumber">
                <label htmlFor="phoneNumber" className={label}>
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  required
                  placeholder="eg:7822020891"
                  className={input}
                  value={userNumber}
                  onChange={(e) => setUserNumber(e.target.value)}
                />
              </div>
            </div>
          </form>
          <div>
            <Button
              backButton={false}
              nextStep="/plans"
              inputDetails={inputDetails}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InputForm;
