//This file is the layout file for the dashboard layout.

DashboardSideNav = React.createClass({
  onSideBar(event){
    //this is a materalize component that needs to be called to activate the side menu on mobile device.
    $('.button-collapse').sideNav().sideNav('show');
  },
  render() {
      var style = {
          sideBar:{
             backgroundColor: "#607d8b"
          },
          sideBarText:{
             color:"#ffffff",
          }
      }
      var guts = (
        <div>
            <ul id="slide-out" className="side-nav fixed" style={style.sideBar}>
                <li><a href="/" style={style.sideBarText}>TEAMS</a></li>
                <li className="divider"></li>
                <li><a href="/" style={style.sideBarText}>SETTINGS</a></li>
                <li className="divider"></li>
                <li><a onClick={Meteor.logout} style={style.sideBarText}>LOG OUT</a></li>
            </ul>
            <a onClick={this.onSideBar} data-activates="slide-out" className="button-collapse">
                <i className="mdi-navigation-menu"></i>
            </a>
        </div>
      );
    return (
        <div>
            <MediaQuery query='(max-device-width: 992px)'>
                <nav style={{backgroundColor: "#00897b"}}>
                    {guts}
                </nav>
            </MediaQuery>
            <MediaQuery query='(min-device-width: 992px)'>
                {guts}
            </MediaQuery>
        </div>
    );
  }
});

