"use client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import LoadingSpinner from "../components/common/LoadingSpinner";
import Header from "../components/static/Header";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Client/Home"));

// Scroll Restoration
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />

      <Suspense fallback={<LoadingSpinner />}>
        <Header />

        <Routes>
          {/* Public Routes */}

          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          {/* Protected Routes */}
          {/* <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          /> */}

          {/* Catch-All / 404 */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <NotFound />
              </>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}
