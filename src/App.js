import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
