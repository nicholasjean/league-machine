MainLayout = React.createClass({
  render() {
    return (
      <div style={{backgroundColor: ""}}>
        <Header />
        <main>{this.props.content}</main>
        <Footer />
      </div>
    );
  }
});
