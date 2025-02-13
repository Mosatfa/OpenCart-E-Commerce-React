import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../layouts/Layout";
// import AuthLayout from "../layouts/AuthLayout";
import ErrorHandler from "../components/errors/ErrorHandler";
import ProductsPage from "../pages/Products";
import Product from "../pages/Product";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
// import CookieService from "../service/CookieService";
import DashBoardLayout from "../layouts/DashBoardLayout";
import DashBoardProductsTable from "../pages/Dashboard/DashBoardProductsTable";

// const acc_token = CookieService.getCookie('jwt')

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

      <Route
        path="/login"
        element={
          <ProtectedRoute redirectPath="/" >
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute redirectPath="/" >
            <RegisterPage />
          </ProtectedRoute>
        }
      />



      <Route path="/dashboard" element={<DashBoardLayout />} errorElement={<ErrorHandler />}>
        <Route path="products" element={<DashBoardProductsTable />} />
      </Route>


      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>

  )
);

export default router;
