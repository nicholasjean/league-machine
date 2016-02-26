// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/blog" content={Blog} layout={MainLayout} />
    <Route path="/pricing" content={Pricing} layout={MainLayout} />
    <Route path="/login" content={Login} layout={MainLayout} />
    <Route path="/register" content={Register} layout={MainLayout} />
    <Route path="/recover-password" content={RecoverPassword} layout={MainLayout} />
    <Route path="/reset-password" content={ResetPassword} layout={MainLayout} />
  </Router>
);

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
