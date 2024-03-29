import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

  const dispatch = useDispatch()

  const { loading } = useSelector( state => state.ui );

  const [formValues, handleInputChange] = useForm({
    username: "hpare",
    password: "@pangaro",
  });

  const { username, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

	dispatch(startLogin(username, password));
  };

  return (
    <main className="d-flex w-100 h-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Welcome back, Charles</h1>
                <p className="lead">Sign in to your account to continue</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-4">
                    <div className="text-center">
                      <img
                        src="img/avatars/avatar.jpg"
                        alt="Charles Hall"
                        className="img-fluid rounded-circle"
                        width="132"
                        height="132"
                      />
                    </div>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="username"
                          placeholder="Enter your username"
                          autoComplete="off"
                          value={username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          name="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="text-center mt-3">
                        <span
                          onClick={handleLogin}
                          className="btn btn-lg btn-primary"
                          disabled={ loading }
                        >
                          Login
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
