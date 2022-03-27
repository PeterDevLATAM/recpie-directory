import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Create from "./pages/create/create.component";
import Home from "./pages/home/home.component";
import Recipe from "./pages/recipe/recipe.component";
import Search from "./pages/search/search.component";
import Navbar from "./components/navbar/navbar.component";
import ThemeSelector from "./components/theme-selector/theme-selector.component";
import { useTheme } from "./hooks/useTheme";

function App() {
  const {mode}= useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector/>
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route path="/create">
            {" "}
            <Create />{" "}
          </Route>
          <Route path="/search">
            {" "}
            <Search />{" "}
          </Route>
          <Route path="/recepies/:id">
            {" "}
            <Recipe />{" "}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
