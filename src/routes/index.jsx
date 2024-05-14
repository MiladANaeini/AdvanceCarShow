import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../components/shared/Loading";
import { BASE_PATH, ROUTES_URL } from "../common/constants/RoutesUrl";

// Used Lazy loading to improve performance
const HomePage = React.lazy(() => import("../pages/HomePage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <Routes basename={BASE_PATH}>
        <Route path={ROUTES_URL.HOME} element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
