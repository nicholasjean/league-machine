//recover password page for mainlayout

RecoverPassword = React.createClass({
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
          <h4 className="page-header">Recover Password</h4>
          <form id="recover-password" className="recover-password" onSubmit={this.handleSubmit}>
            <p className="alert alert-info">Enter your email address below to receive a link to reset your password.</p>
            <div className="form-group">
              <label htmlFor="emailAddress" style={style.label}>Email Address</label>
              <input type="email" name="emailAddress" className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-success" value="Recover Password" />
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    );
  }
});