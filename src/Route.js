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
import Edit from "./Projects/CrudTable/Edit";
import AddReduxUser from "./Projects/Redux-Table/AddReduxUser";
import EditReduxUser from "./Projects/Redux-Table/EditReduxUser";
import WeatherApp from "./Projects/WeatherApp/WeatherApp";
import Calculator from "./Projects/Calculator/Calculator";
import Hookform from "./Projects/react-hook-form/Hookform";
const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* Navbar Routes */}
        <Route path="/weatherapp" component={WeatherApp} />

        {/* Hook form in react js  */}
        <Route path="/hookfrom" component={Hookform} />
        <Route path="/" component={App} exact />
        <Route path="/simpletodo" component={SimpleTodo} exact />
        <Route path="/Form" component={Form} exact />
        <Route path="/Table" component={Table} exact />
        <Route path="/todoredux" component={ReduxTodo} exact />

        {/* Calculator  */}
        <Route path="/Calculator" component={Calculator} exact />

        {/* Redux Table Routes  */}
        <Route path="/ReduxTable" component={ReduxTable} />
        <Route path="/AddReduxUser" component={AddReduxUser} />
        <Route path="/EditReduxUser/:id" component={EditReduxUser} />

        {/* Crud Table Routes  */}
        <Route path="/crudTable" component={CrudTable} />
        <Route path="/Adduser" component={Addusers} />
        <Route path="/EditTable/:id" component={Edit} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Routes;
