import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from "./pages/signup";
import Email from "./pages/email";
function App() {
  return (
      <Router>
<Switch>

    <Route path='/signup' component={SignUp} />
    <Route path='/email' component={Email} />

</Switch>


      </Router>

  );
}

export default App;
