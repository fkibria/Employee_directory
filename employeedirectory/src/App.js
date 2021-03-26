import { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import axios from 'axios';

class App extends Component {

  state = {
    employees: []
  };

  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=25&nat=ca')
    .then((response) =>{
      console.log(response)
      this.setState({
        employees: response.data.results
      })
    })
  }
  
  handleSearchboxChange = e => {
    console.log(e.target.value);
  }


  render(){
  return (
    <div className="App">
    <Navbar handleSearchboxChange= {this.handleSearchboxChange}/>  
    <Table employees={this.state.employees}/>
    </div>
  );
  }
}

export default App;
