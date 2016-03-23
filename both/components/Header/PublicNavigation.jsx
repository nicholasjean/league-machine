//This is the header that shows when a user is not logged in for mainlayout

PublicNavigation = React.createClass({
  render() {
    return (
        <div>
            <nav style={{backgroundColor: "#00897b"}}>
                <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">SMASH UP</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/blog">BLOG</a></li>
                        <li><a href="/pricing">PRICING</a></li>
                        <li><a href="/login" className="waves-effect waves-light btn">LOGIN</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
});