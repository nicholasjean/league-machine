//Login page for mainlayout

Login = React.createClass({
  handleSubmit( event ) {
    event.preventDefault();
    var email = ReactDOM.findDOMNode(this.refs.emailAddress).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.loginWithPassword(email,password);
    FlowRouter.path( '/' );
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
              <input type="email" ref="emailAddress" name="emailAddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={style.label}><span className="pull-left">Password</span> <a className="pull-right" href="/recover-password">Forgot Password?</a></label>
              <input type="password" ref="password" name="password" className="form-control" placeholder="Password" />
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