//header for mainlayout

Header = React.createClass({
  // brandLink() {
  //     if ( !Meteor.loggingIn() && !Meteor.userId() ) {
  //       return FlowRouter.path( 'login' );
  //     }

  //     return FlowRouter.path( 'index' );
  // },
  navigationItems() {
      if ( !Meteor.loggingIn() && Meteor.user() ) {
        return <AuthenticatedNavigation />;
      } else {
        return <PublicNavigation />;
      }
  },
  render() {
    return (
        <div>
          {this.navigationItems()}
        </div>
    );
  }
});

