const someelement = () => (
    <div>
    <p> Home Page</p>
    
    </div>
    );
    
    
    const someotherelement = () => 
    (
      <div>
      <p>Add Expense</p> 
      </div>
    );
    const edit = ()  => (
      <div>
      <p> This is the edit page  </p>
      </div>
    
    );
    const help = () => (
    
    <div> 
    <p>Help Page</p> 
    </div> 
    );
    
    const pageNotFound = () => (
    <div>
    <p> 404 <Link to="/">Go home</Link> </p>
    </div>
    );
    
    
    const Header = () => (
    <header>
    <h1>Expensify App</h1>
     <NavLink to="/create" activeClassName="bold" exact={true}>Add Expense</NavLink> 
     <NavLink to="/edit" activeClassName="bold" exact={true}>Edit Expense</NavLink> 
     <NavLink to="/help" activeClassName="bold" exact={true}>Edit Expense</NavLink> 
     <NavLink to="/" activeClassName="bold" exact={true}>HomePage</NavLink>
    </header>
    );

    const AppRouter = () => (
        




    );
    
      const routes = (
        <BrowserRouter>
        <div>
         <Header/>
          <Switch>
          <Route path= "/" component={someelement} exact={true}/>
          <Route path= "/create" component={someotherelement} exact={true}/>
          <Route path="/edit" component={edit} exact={true} />
          <Route path="/help" component={help} exact={true} />
          <Route component={pageNotFound} />
          </Switch>
        </div>
        </BrowserRouter>
      );
    
    