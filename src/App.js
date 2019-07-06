import React,{Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Route path="/ayoub" render={() => { return (<Person name='ayoub' job="student" img="https://robohash.org/ayoub2" />)}} />
        <Route path="/brha"render={() => { return (<Person name='ibrahim'job="student" img="https://robohash.org/ibrahim2"/>)}}/>
      </div>
      <div>
        <Link to="/ayoub">
        <button>AYOUB</button>
        </Link>
        <Link to="/brha">
          <button>BRHA</button>
        </Link>
      </div>
      </BrowserRouter>

    )
  }
}
export default App;
