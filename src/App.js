import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './component/layout/Navbar'
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetails';

import SignUp from './component/auth/SignUp';
import CreateProject from './component/project/CreateProject';
import Home from './component/layout/home';
import SignIn1 from './component/auth/SignIn1';
import SignpSuccess from './component/auth/signpSuccess';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
       <Navbar />
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/dashboard' component={Dashboard} />
         <Route path='/project/:id' component={ProjectDetails} />
         
         
         <Route path='/signin' component={SignIn1} />
         <Route path='/signup' component={SignUp} />
         <Route path='/create' component={CreateProject} />

         <Route path='/congrats' component={SignpSuccess} />
        
       </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
