// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router


//This is the router file, When new pages are created they need to have a route
//path = the href, content = the react class, layout equals what layout the page is in.
Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/blog" content={Blog} layout={MainLayout} />
    <Route path="/pricing" content={Pricing} layout={MainLayout} />
    <Route path="/login" content={Login} layout={MainLayout} />
    <Route path="/register" content={Register} layout={MainLayout} />
    <Route path="/recover-password" content={RecoverPassword} layout={MainLayout} />
    <Route path="/reset-password" content={ResetPassword} layout={MainLayout} />
    <Route path="/dashboard" content={Dashboard} layout={DashboardLayout} />
    <Route path="/teams" content={Teams} layout={DashboardLayout} />
    <Route path="/settings" content={Settings} layout={DashboardLayout} />
  </Router>
);

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
