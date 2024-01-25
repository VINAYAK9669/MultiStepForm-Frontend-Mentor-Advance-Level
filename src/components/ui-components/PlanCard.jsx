/* eslint-disable no-unused-vars */

import { useDispatch, useSelector } from "react-redux";
import { planID, price, name } from "../Slices/planSlice";

/* eslint-disable react/prop-types */
function PlanCard({ icon, planName, planPrice, id }) {
  const selectedId = useSelector((state) => state.planInfo.id);

  const dispatch = useDispatch();

  function handleCard() {
    dispatch(planID(id));
    dispatch(price(planPrice));
    dispatch(name(planName));
  }
  return (
    <>
      <div
        className={`flex flex-row  md:flex-col gap-8 border w-full md:w-[150px] p-2 rounded-md hover:bg-neutral-Magnolia ${
          id === selectedId
            ? "border border-primary-Marine-blue"
            : "border border-none"
        }`}
        onClick={() => handleCard()}
      >
        <div>
          <img src={icon}></img>
        </div>
        <div>
          <h5 className="text-primary-Marine-blue font-bold">{planName}</h5>
          <p className="text-neutral-Light-gray font-semibold">
            ${planPrice}/mo
          </p>
        </div>
      </div>
    </>
  );
}

export default PlanCard;
