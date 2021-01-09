import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Webshop from "./Webshop";
import Favorites from "./Favorites";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/contacts" component={Contact}></Route>
        <Route path="/products" component={Webshop}></Route>
        <Route path="/favorites" component={Favorites}></Route>
        <Route path="/products/:id" component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;
