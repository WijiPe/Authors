import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "./views/Main";
import AddAuthor from "./views/AddAuthor";
import EditAuthor from "./views/EditAuthor";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/edit/:id">
          <EditAuthor />
        </Route>
        <Route exact path="/new">
          <AddAuthor />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}


export default App;
