import React from "react";

export const LoginScreen = () => {
  return (
    <div
      className="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu preload-transitions 1-column login-bg blank-page blank-page"
      data-open="click"
      data-menu="vertical-dark-menu"
      data-col="1-column"
    >
      <div className="row">
        <div className="col s12">
          <div className="container">
            <div id="login-page" className="row">
              <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                <form className="login-form">
                  <div className="row">
                    <div className="input-field col s12">
                      <h5 className="ml-4">Sign in</h5>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">person_outline</i>
                      <input id="username" type="text" />
                      <label htmlFor="username" className="center-align">
                        Username
                      </label>
                    </div>
                  </div>
                  <div className="row margin">
                    <div className="input-field col s12">
                      <i className="material-icons prefix pt-2">lock_outline</i>
                      <input id="password" type="password" />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <a
                        href="index.html"
                        className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="content-overlay"></div>
        </div>
      </div>
    </div>
  );
};
