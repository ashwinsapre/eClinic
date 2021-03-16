import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component.js'
import newUser from './components/newUser.component';
import showUsers from './components/showUsers.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/show" component={showUsers}></Route>
        <Route path="/add" component={newUser}></Route>
      </div>
    </Router>
  );
}

export default App;
