import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import OnOff from "./components/OnOff";
import SearchResults from "./components/SearchResults";
import Button from "./components/Button";
import LoginForm from "./components/LoginForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import Users from "./components/Users";
import MyForm from "./components/Myform";

function App() {
  const [date, setDate] = useState(new Date().toISOString().slice("T")[0]);
  const [color, setColor] = useState("#FFFFFF");
  const [users, setUsers] = useState([]);
  const changeColor = (array) => {
    setColor(array[Math.floor(Math.random() * array.length)]);
  };
  return (
    <Router>
      <div className="App">
      <LoginForm users={users} setUsers={setUsers} />
      <Users users={users}/>
      <MyForm/>
      <br/>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
        <OnOff />
        <br/>
        
        <br/>
        <Button color={color} changeColor={changeColor} />
        <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        </nav>
        <Switch>
          <Route path="/search" component={SearchResults} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
