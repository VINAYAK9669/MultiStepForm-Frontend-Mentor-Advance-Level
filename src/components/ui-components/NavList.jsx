/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function NavList() {
  const location = useLocation();
  const urlPath = location.pathname;

  // Styling
  const li = "flex gap-4 justify-left items-center";
  const span = ` h-[20px] w-[20px] flex justify-center items-center rounded-full p-5 border border-slate-50 font-semibold text-neutral-White`;
  const activeSpan = "bg-primary-Pastel-blue text-primary-Marine-blue";
  const stpeNames =
    "text-neutral-White  font-semibold uppercase hidden md:block";
  const firstPageData = useSelector((state) => state.personalInfo.name);
  const secondPageData = useSelector((state) => state.planInfo.name);
  const summaryPageData = useSelector((state) => state.addOn.name);
  return (
    <div className="col-span-5 md:col-span-3  bg-bg_sidebar_mobile md:bg-bg_sidebar_desktop bg-cover md:bg-cover bg-center md:bg-center rounded-md flex  center md:px-[3rem] md:py-7 justify-center h-[25dvh]  w-full md:h-full">
      <ul className="flex flex-row  md:flex-col md:gap-y-4  ">
        <li className={li}>
          <span className={`${span} ${urlPath === "/" ? activeSpan : ""}`}>
            1
          </span>
          <div className="flex flex-col">
            <span className="text-primary-Pastel-blue hidden md:block">
              STEP 1
            </span>
            <Link to="/" className={stpeNames}>
              Your Info
            </Link>
          </div>
        </li>
        <li className={li}>
          <span className={`${span} ${urlPath === "/plans" ? activeSpan : ""}`}>
            2
          </span>
          <div className="flex flex-col">
            <span className="text-primary-Pastel-blue hidden md:block">
              STEP 2
            </span>
            <Link to={firstPageData ? "/plans" : "/"} className={stpeNames}>
              {" "}
              Select Plan
            </Link>
          </div>
        </li>
        <li className={li}>
          <span
            className={`${span} ${urlPath === "/add-ons" ? activeSpan : ""}`}
          >
            3
          </span>
          <div className="flex flex-col">
            <span className="text-primary-Pastel-blue hidden md:block">
              STEP 3
            </span>
            <Link
              to={firstPageData && secondPageData ? "/add-ons" : "/"}
              className={stpeNames}
            >
              {" "}
              Add-Ons
            </Link>
          </div>
        </li>
        <li className={li}>
          <span
            className={`${span} ${urlPath === "/summary" ? activeSpan : ""}`}
          >
            4
          </span>
          <div className="flex flex-col">
            <span className="text-primary-Pastel-blue hidden md:block">
              STEP 4
            </span>
            <Link to={firstPageData ? "/summary" : "/"} className={stpeNames}>
              Summary
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default NavList;
