import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageRoute } from "./constants";
import LandingPage from "./pages/Landing";

export const App = (): React.ReactElement => (
  <Routes>
    <Route element={<LandingPage />} path={PageRoute.DEFAULT} />
    <Route element={<LandingPage />} path={PageRoute.DOCS} />
    <Route element={<LandingPage />} path={PageRoute.SERVICES} />
    <Route element={<LandingPage />} path={PageRoute.COMPANY} />
    <Route element={<LandingPage />} path={PageRoute.BLOG} />
  </Routes>
);
