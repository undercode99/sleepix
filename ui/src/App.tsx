import Navbar from "./components/organism/Navbar"
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import PipelinesPage from "./pages/PipelinesPage";
import HomePage from "./pages/HomePage";
import EnvironmentsPage from "./pages/EnvironmentsPage";
import PipelineDetailPage from "./pages/PipelineDetailPage";
import 'react-flow-renderer/dist/theme-default.css';


function App(): JSX.Element {
  return (
    <Router>
      <div className="app flex">
        <Navbar />
        <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/pipelines">
              <PipelinesPage/>
            </Route>
            <Route  path="/pipelines/detail">
              <PipelineDetailPage/>
            </Route>
            <Route path="/environments">
              <EnvironmentsPage/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
