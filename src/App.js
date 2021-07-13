import './App.css';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import SelectStore from './pages/ChooseStore/selectStore';
import Login from './pages/StoreLogin/login';
import { ResetPasswordRoutes } from './subRoutes/ResetPasswordRoutes';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/login" component={Login} />
         <Route path="/reset_password" component={ResetPasswordRoutes} />
         <Route path="/" component={SelectStore}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;