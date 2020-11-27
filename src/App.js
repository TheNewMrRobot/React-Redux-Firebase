import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import NavBar from "./Components/Layouts/Navbar";
function App() { 
  return (
    <Router>
    <div className="App">
     <NavBar/>
     <Switch>
       <Route path="/" component={Dashboard}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
