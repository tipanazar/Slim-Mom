import { lazy, Suspense } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { Route, Routes, Navigate } from "react-router-dom";

import { getLoading } from "../redux/userAccount/userAccount-selectors";

import PublicRoute from "../shared/components/PublicRoute";
import PrivateRoute from "../shared/components/PrivateRoute";

import Loader from "../shared/components/Loader";
import LayoutPage from "../pages/LayoutPage";
import MainPage from "../pages/MainPage";

const RegisterPage = lazy(() => import("../pages/Auth/RegisterPage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage"));
const DiaryPage = lazy(() => import("../pages/DiaryPage"));
const CalculatorPage = lazy(() => import("../pages/CalculatorPage"));

const MyRoutes = () => {
  const isLoading = useSelector(getLoading, shallowEqual);
  return (
    <Suspense fallback={<Loader backgrColor={"white"} />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="signup" element={<RegisterPage />} />
            <Route path="signin" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="diary" element={<DiaryPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isLoading || <Loader />}
    </Suspense>
  );
};

export default MyRoutes;
