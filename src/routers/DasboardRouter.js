import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AmountScreen } from "../components/gestionCategoria/AmountScreen";
import { CategoriaScreen } from "../components/gestionCategoria/CategoriaScreen";
import { Header } from "../components/ui/Header";
import { Sidebar } from "../components/ui/Sidebar";

export const DasboardRouter = () => {
  return (
    <>
      <Header />

      <Sidebar />

      <Switch>
        <Route exact path="/" component={ CategoriaScreen } />

        <Route exact path="/amount" component={ AmountScreen } />

        <Redirect to="/" />
      </Switch>
    </>
  );
};
