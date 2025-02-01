import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../pages/Layout";
import ErrorHandler from "../components/errors/ErrorHandler";
import HomePage from "../pages";
import ProductsPage from "../pages/Products";



const storageKey = "loggedInUser";
const userDataString = localStorage.getItem(storageKey);
const userData = userDataString ? JSON.parse(userDataString) : null;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Root Layout */}
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route
          index
          element={
            <ProtectedRoute isAllowed={userData?.jwt} redirectPath="/login" data={userData}>
            <ProductsPage />
              
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="products"
          element={
          }
        /> */}
        {/* <Route
          path="login"
          element={
            <ProtectedRoute isAllowed={!userData?.jwt} redirectPath="/" data={userData}>
              <LoginPage />
            </ProtectedRoute>
          }
        /> */}
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
