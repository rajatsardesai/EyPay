import Home from "./Home";
import { Route, Switch } from "react-router-dom";
import About from './pages/About';
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/service" component={Service} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
