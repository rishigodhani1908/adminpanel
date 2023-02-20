import { Link } from "react-router-dom";

const Forgot_password = () => {
  return (
    <>
      <div className="login-box mx-auto my-5">
        <div className="login-logo">
          <Link to="/Dasboard">Admin</Link>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
            <form action="recover-password.html" method="post">
              <div className="input-g roup mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                </div>
                {/* /.col */}
              </div>
            </form>
            <p className="mt-3 mb-1">
              <Link to="/admin">Login</Link>
            </p>
            <p className="mb-0">
              <Link to="/admin/Register" className="text-center">Register a new membership</Link>
            </p>
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
      {/* /.login-box */}


    </>
  )
}
export default Forgot_password;