import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageRoute } from "./constants";
import LandingV2 from "./pages/LandingV2";

export const App = (): React.ReactElement => (
  <Routes>
    <Route element={<LandingV2 />} path={PageRoute.DEFAULT} />
  </Routes>
);
