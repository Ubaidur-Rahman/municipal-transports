import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
    <Router >
      <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/destination">
              <Destination />
            </PrivateRoute>
            <PrivateRoute path="/transport/:transportName">
              <Destination />
            </PrivateRoute>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/*">
              <NoMatch />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
   
  );
}

export default App;


