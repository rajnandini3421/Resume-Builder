import { Route, Routes, Switch } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import { RoutePaths } from "../assets/constants/RoutePaths";
import { Fragment } from "react";
import AppLayout from "../layouts/AppLayout";
const AppRoutes = () => {
  return (
    <Fragment>
      <AppLayout>
        <Switch>
          {RoutePaths.map((route) => {
            return (
              <Route
                key={route.path}
                exact
                path={`${route.path}`}
                component={route.component}
              />
            );
          })}

          <Route component={NotFoundPage} />
        </Switch>
      </AppLayout>
    </Fragment>
  );
};

export default AppRoutes;
