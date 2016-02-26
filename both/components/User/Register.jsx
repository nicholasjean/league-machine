Register = React.createClass({
  componentDidMount() {
    Modules.client.signup({
      form: "#signup"
    });
  },
  handleSubmit( event ) {
    event.preventDefault();
  },
  render() {
      var style = {
      label: {
        color: "#424242"
      },
      center: {
        textAlign: "center"
      }
    }
    return (
       <div className="container">
    <div className="section">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <h4 className="page-header" style={style.center}>Register</h4>
          <form id="signup" className="signup" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailAddress" style={style.label}>Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="password" style={style.label}>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Password" />
            </div>
             <div className="form-group">
              <label htmlFor="retypePassword" style={style.label}>Retype Password</label>
              <input type="password" name="retypePassword" className="form-control" placeholder="Retype Password" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Register" />
            </div>
          </form>
          <p>Already have an account? <a href="/login">Log In</a>.</p>
        </div>
      </div>
      </div>
      </div>
    );
  }
});