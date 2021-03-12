import React, { Fragment, Component, FC, lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import Loader from "../components/loader/Loader";
import { RouteEnums } from "./RouteEnums";

const Dashboard = lazy(()=>import("../containers/dashboard/Dashboard"))


class AppNavigator extends Component<any, any> {
  App: FC = () => (
    <Fragment>
      <Suspense fallback={<Loader/>}>

      <Switch>
        <Route path={`/`} component={Dashboard} exact />
        <Route path={`/${RouteEnums.CART}`} component={()=>null} exact />
      </Switch>
      </Suspense>
    </Fragment>
  );

  render() {
    return <this.App />;
  }
}

export default AppNavigator;
