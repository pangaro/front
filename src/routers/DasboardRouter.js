import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AmountScreen } from "../components/gestionCategoria/AmountScreen";
import { CategoriaScreen } from "../components/gestionCategoria/CategoriaScreen";
import { Header } from "../components/ui/Header";
import { Sidebar } from "../components/ui/Sidebar";
import { Footer } from "../components/ui/Footer";
import { MainScreen } from "../components/ui/Main";

export const DasboardRouter = () => {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="main">
        <Header />

        <main className="content">
          <div className="container-fluid p-0">
            <Switch>
              <Route exact path="/" component={MainScreen} />

              <Route exact path="/category" component={CategoriaScreen} />

              <Route exact path="/amount" component={AmountScreen} />

              <Redirect to="/" />
            </Switch>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
