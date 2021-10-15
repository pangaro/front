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
            <h1 className="h3 mb-3">Tables</h1>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Hoverable Rows</h5>
                    <h6 className="card-subtitle text-muted">
                      Add <code>.table-hover</code> to enable a hover state on
                      table rows within a<code>&lt;tbody&gt;</code>.
                    </h6>
                  </div>

                  <Switch>
                    <Route exact path="/" component={MainScreen} />
                    
                    <Route exact path="/category" component={CategoriaScreen} />

                    <Route exact path="/amount" component={AmountScreen} />

                    <Redirect to="/" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
