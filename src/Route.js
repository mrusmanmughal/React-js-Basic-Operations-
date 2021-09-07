import React from "react";
import App from "./App";
import SimpleTodo from "./Projects/SimpleTodo/Todo";
import Form from "./Projects/Form/Form";
import Table from "./Projects/Table/Table";
import { Switch, Route } from "react-router-dom";
import ReduxTodo from "./Projects/ReduxTodo/ReduxTodo";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/simpletodo" component={SimpleTodo} exact />
        <Route path="/Form" component={Form} exact />
        <Route path="/Table" component={Table} exact />
        <Route path="/todoredux" component={ReduxTodo} exact />
      </Switch>
    </>
  );
};

export default Routes;
