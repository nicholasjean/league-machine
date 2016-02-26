Footer = React.createClass({
  render() {
      var footerStyle = {
         position: "absolute",
         right: "0",
         bottom: "0",
         left: "0",
         padding: "1rem",
         backgroundColor: "#212121",
         textAlign: "center",
         width: "100%",
         color: "#e0e0e0"
      };
    return (
        <div className="container" style={footerStyle}>
            <div className="section">
                    <h1>Footer</h1>
            </div>
        </div>
    );
  }
});