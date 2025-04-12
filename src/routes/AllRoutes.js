import { Routes, Route } from "react-router-dom";
import {VehicleList, VehicleDetail, PageNotFound} from "../pages/index";
import {useLocation} from "react-router-dom";
import { useEffect } from "react";

export function AllRoutes() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="vehicles/:id" element={<VehicleDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
