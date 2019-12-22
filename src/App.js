import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Card from './component/card/card.js';
import {CardList} from './component/cardlist/cardlist.js';

class App extends React.Component 
{
    constructor()
    {
      super()
      this.state={users:[],seaarchfield:""}
    }
  componentDidMount=(e)=>
        {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=>response.json())
          .then(data=>this.setState({users:data}));
     
        }
      filteredcard=(e)=>
        {
          this.setState({seaarchfield:e.target.value})
        }
  render()
  {
     console.log(this.state.users)
     const{users}=this.state;
     const filteredRobot=users.filter(seaarchfield=>seaarchfield.name.toLowerCase().includes(this.state.seaarchfield.toLowerCase()));
  
  return(

    <div className="App">
        <h1>Robo Friend</h1>
        <input type="text" placeholder="search robots" onChange={this.filteredcard}/>
       
        <CardList users={filteredRobot}/>
      
    </div>
       );
  }
}
export default App;
