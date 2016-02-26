Login = React.createClass({
  componentDidMount() {
    Modules.client.login( { form: "#login" } );
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
    var style = {
      label: {
        color: "#424242"
      }
    }
    return (
      <div className="container">
    <div className="section">
        <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4 className="page-header">Login</h4>
          <form id="login" className="login" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAddress" style={style.label}>Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={style.label}><span className="pull-left">Password</span> <a className="pull-right" href="/recover-password">Forgot Password?</a></label>
              <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Login" />
            </div>
          </form>
          <p>Don't have an account? <a href="/register">Sign Up</a>.</p>
        </div>
      </div>
      </div>
      </div>
    );
  }
});