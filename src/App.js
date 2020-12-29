import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import SingleProject from './components/SingleProject';

function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route component={Home} path='/' exact/>
         <Route component={About} path='/about' />
         <Route component={Contact} path='/contact' />
         <Route component={SingleProject} path='/projects/:slug'/>
         <Route component={Projects} path='/projects' />
       </Switch>
    </BrowserRouter>
  )
}

export default App;
