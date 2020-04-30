/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import LoadingScreen from "./components/LoadingScreen";

const routesConfig = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("./views/pages/Error404View")),
  },
  {
    path: "/",
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: lazy(() => import("./views/DashboardView")),
      },
      {
        exact: true,
        path: "/ticket-manager",
        component: lazy(() => import("./views/DashboardView")),
      },
      {
        exact: true,
        path: "/dashboard",
        component: lazy(() => import("./views/DashboardView")),
      },
      {
        component: () => <Redirect to="/404" />,
      },
    ],
  },
];

const renderRoutes = (routes) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
