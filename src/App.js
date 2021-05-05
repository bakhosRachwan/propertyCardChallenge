import { Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignUp/SignIn";
import Tenant from "./pages/Tenant/Tenant";
import Owner from "./pages/Owner/Owner";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/owner/:id" component={Owner} />
        <Route path="/tenant/:id" component={Tenant} />
      </div>
    </Router>
  );
}

export default App;
