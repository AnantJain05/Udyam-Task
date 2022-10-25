import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Detail from "./components/Details/Detail";
import Category from "./components/Category/Category";
import Home from "./components/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Header  />
      <Switch>
        <Route
          path={`/:category/search/:keyword`}
          component={Category}
        />
        <Route path={`/:category/:id`} component={Detail} />
        <Route path={`/:category`} component={Category} />
        <Route path={`/`} exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
