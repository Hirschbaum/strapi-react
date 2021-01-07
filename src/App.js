import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import Webshop from "./Webshop";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/homes" component={Home}></Route>
        <Route path="/contacts" component={Contact}></Route>
        <Route path="/products" component={Webshop}></Route>
        <Route path="/products/:id" component={Details}></Route>
      </Router>
    </div>
  );
}

export default App;
