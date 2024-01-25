/* eslint-disable no-unused-vars */

import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import InputForm from "./components/inputForm/InputForm";
import Plan from "./components/inputForm/Plan";
import AddOns from "./components/inputForm/AddOns";
import FinishingUp from "./components/inputForm/FinishingUp";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<InputForm />}></Route>
          <Route path="/plans" element={<Plan />}></Route>
          <Route path="/add-ons" element={<AddOns />}></Route>
          <Route path="/summary" element={<FinishingUp />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
