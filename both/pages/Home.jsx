//home page for mainlayout

Home = React.createClass({
  render() {
    var style = {
      button: {
        marginLeft: "10px",
        marginBottom: "5px"
      }
    }
    return (
       <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1 z-depth-5 center-align">
                <div className="card-content white-text">
                  <span className="card-title">The Ultimate Sport Manager</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                  <a style={style.button} className="waves-effect waves-light btn" href="/register">SIGN UP</a>
                  <a style={style.button} className="waves-effect waves-light btn" href="#">LEARN MORE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
  }
});
