import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AddStudent from './Components/AddStudent';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import AllStudents from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
      <Switch>
      <Route exact path="/">
        <Login/>
        </Route>
        <Route path="/AddStudent">
        <AddStudent/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
        <Route path="/AllStudents">
          <AllStudents/>
        </Route>
        <Route path="/UpdateStudent/:_id">
         <UpdateStudent/>
      </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
