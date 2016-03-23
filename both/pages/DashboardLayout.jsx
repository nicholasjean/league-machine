//this is the layout for the dashboardlayout

DashboardLayout = React.createClass({
  render() {
    return (
      <div style={{backgroundColor: ""}}>
       <DashboardSideNav />
       <MediaQuery query='(max-device-width: 992px)'>
          <main style={{paddingLeft: "10px"}}>{this.props.content}</main>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 992px)'>
          <main style={{paddingLeft: "250px"}}>{this.props.content}</main>
        </MediaQuery>
      </div>
    );
  }
});