import React, { Component, Dispatch, Fragment } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { pizzasRequest } from "./actions";
import { Pizzas } from "./types";

interface PropsFromState {
  loading: boolean;
  pizzas: Pizzas[];
  errors: {
    pizzasError?: {
      message: string;
    };
  };
}

interface PropsDispatchFromState {
  onGetPizzasRequest: typeof pizzasRequest;
}

type AllProps = PropsFromState & PropsDispatchFromState;

interface State {}

class Dashboard extends Component<AllProps, State> {
  state: State = {};

  componentDidMount() {
    this.props.onGetPizzasRequest();
  }

  render() {
    return (
      <Fragment>
        <div>pizzas</div>
      </Fragment>
    );
  }
}

const mapStateToProps: any = ({ pizzas }: ApplicationState) => ({
  loading: pizzas.loading,
  pizzas: pizzas,
  errors: pizzas.errors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onGetPizzasRequest: () => dispatch(pizzasRequest()),
});

export default connect<any>(mapStateToProps, mapDispatchToProps)(Dashboard);
