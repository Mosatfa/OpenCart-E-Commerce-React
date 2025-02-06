import { Route, createBrowserRouter, createRoutesFromElements, useLocation } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../layouts/Layout";
import AuthLayout from "../layouts/AuthLayout";
import ErrorHandler from "../components/errors/ErrorHandler";
import ProductsPage from "../pages/Products";
import Product from "../pages/Product";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import CookieService from "../service/CookieService";

const acc_token = CookieService.getCookie('jwt')

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route
          index
          element={
            <ProductsPage />
          }
        />
        <Route
          path="products/:id"
          element={
            <Product />
          }
        />
      </Route>

      <Route element={<AuthLayout />} errorElement={<ErrorHandler />}>
        <Route
          path="/auth/login"
          element={
            <ProtectedRoute isAllowed={!acc_token} redirectPath="/" data={acc_token}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/register"
          element={
            <ProtectedRoute isAllowed={!acc_token} redirectPath="/" data={acc_token}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>

  )
);

export default router;
