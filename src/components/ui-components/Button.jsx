/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlePersonalInfo } from "../Slices/inputFormSice";

/* eslint-disable react/prop-types */
function Button({
  backButton,
  nextStep,
  prevStep,
  inputDetails = {},
  checkBoxHandler,
  formType,
  setFinalPage,
}) {
  const navigate = useNavigate();
  const { userName, userMail, userNumber } = inputDetails;

  const [formError, setFormError] = useState(false);
  const id = useSelector((state) => state.planInfo.id);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    if (formType === "finish") {
      setFinalPage(true);
      return;
      //
    }
    if (formType === "add") {
      checkBoxHandler();
      navigate(nextStep);
      return;
    }

    if (userName && userMail && userNumber) {
      navigate(nextStep);
      dispatch(handlePersonalInfo(userName, userMail, userNumber));
    } else if (
      id !== undefined &&
      userMail !== "" &&
      userName !== "" &&
      userNumber !== ""
    ) {
      navigate(nextStep);
    } else {
      setFormError(true);
    }
  }

  const button = `px-6 py-2 ${
    formError ? `bg-red-500` : `bg-primary-Marine-blue`
  } text-neutral-White rounded-md outline-none mt-[3rem]`;
  return (
    <div className="  bottom-0 w-[100%] left-0">
      <div className="flex flex-row-reverse justify-between items-center py-2 ">
        <button
          className={`${button}`}
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          Next
        </button>
        {backButton && (
          <button
            className={`${button} bg-white text-slate-700 px-0 hover:text-slate-700 hover:font-medium`}
            onClick={(e) => {
              e.preventDefault();
              navigate(prevStep);
            }}
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}

export default Button;
