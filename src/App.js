import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

const App = () => {

  return (
   <GithubState> 
    <AlertState>  
   <Router> 
    <div className="App">
        <Navbar />
        <div className='container'>
          <Alert />
         <Switch>
            <Route exact path='/' component={Home} />
            < Route path='/about' component={About}/>
            
            < Route exact path='/user/:login' component={User} />
            < Route component={NotFound} />
          
           </Switch> 
        </div>
        <Footer/>  
    </div>
  </Router> 
  </AlertState>
  </GithubState>
  );
  
}

export default App;
