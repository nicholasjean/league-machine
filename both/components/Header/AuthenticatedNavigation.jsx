//This is the header that shows when a user is logged in for mainlayout

AuthenticatedNavigation = React.createClass({
  componentDidMount() {
    $(".dropdown-button").dropdown();
  },
  doDropdown(){
    $(".dropdown-button").dropdown();
  },
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  },
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
            <li><a href="/dashboard">Dashboard</a></li>
            <li className="divider"></li>
            <li onClick={Meteor.logout}><a href="#">Logout</a></li>
        </ul>
        <nav style={{backgroundColor: "#00897b"}}>
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">SMASH UP</a>
             <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="/blog">Blog</a></li>
                <li><a href="/pricing">Pricing</a></li>
                <li onClick={this.doDropdown}><a className="dropdown-button" href="#!" data-activates="dropdown1">
                  {this.currentUserEmail()}<i className="mdi-action-arrow_drop_down right"></i></a></li>
             </ul>
          </div>
        </nav>
      </div>
    );
  }
});