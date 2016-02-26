Header = React.createClass({
  render() {
    return (
      <nav style={{backgroundColor: "#00897b"}}>
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">League Machine</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/login">login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
