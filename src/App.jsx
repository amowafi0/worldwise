import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/citiescontext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./prges/ProtectedRoute.jsx";
import { lazy, Suspense } from "react";

import CityList from "./componts/CityList.jsx";
import CountryList from "./componts/countriesList.jsx";
import City from "./componts/City.jsx";
import Form from "./componts/Form.jsx";
import SpinnerFullPage from "./componts/SpinnerFullPage.jsx";

const Homepage = lazy(() => import("./prges/Homepage.jsx"));
const Product = lazy(() => import("./prges/Product.jsx"));
const Pricing = lazy(() => import("./prges/Pricing.jsx"));
const Notfound = lazy(() => import("./prges/PageNotFound.jsx"));
const AppLayout = lazy(() => import("./prges/AppLayout.jsx"));
const Login = lazy(() => import("./prges/Login.jsx"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="Pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<Notfound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
