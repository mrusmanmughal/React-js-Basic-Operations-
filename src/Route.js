import React from "react";
import App from "./App";
import SimpleTodo from "./Projects/SimpleTodo/Todo";
import Form from "./Projects/Form/Form";
import Table from "./Projects/Table/Table";
import { Switch, Route } from "react-router-dom";
import ReduxTodo from "./Projects/ReduxTodo/ReduxTodo";
import ReduxTable from "./Projects/Redux-Table/ReduxTable";
import CrudTable from "./Projects/CrudTable/CrubTable";
import Error from "./Error";
import Navbar from "./Navbar";
import Addusers from "./Projects/CrudTable/Addusers";
const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/simpletodo" component={SimpleTodo} exact />
        <Route path="/Form" component={Form} exact />
        <Route path="/Table" component={Table} exact />
        <Route path="/todoredux" component={ReduxTodo} exact />
        <Route path="/ReduxTable" component={ReduxTable} />
        <Route path="/crudTable" component={CrudTable} />
        <Route path="/Adduser" component={Addusers} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Routes;
