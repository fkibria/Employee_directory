import { Component } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import axios from 'axios';

class App extends Component {

  state = {
    employees: [],
    ascend: true
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=25&nat=ca')
      .then((response) => {
        console.log(response)
        this.setState({
          employees: response.data.results
        })
      })
  }

  handleSearchboxChange = e => {
    console.log(e.target.value);
  }
  sortByFirstName = () => {
    const newOrder = this.state.employees;
    const doesAscend = this.state.ascend;
    newOrder.sort(function (a, b) {

      return ((doesAscend) ?
        a.name.first.localeCompare(b.name.first)
        : b.name.first.localeCompare(a.name.first))
    });
    this.setState(
      {
        employees: newOrder,
        ascend: !doesAscend
      }
    )
  }
  sortByLastName = () => {
    const newOrder = this.state.employees;
    const doesAscend = this.state.ascend;

    newOrder.sort(function (a, b) {
      return ((doesAscend) ? a.name.last.localeCompare(b.name.last)
        : b.name.last.localeCompare(a.name.last))
    });
    this.setState(
      {
        employees: newOrder,
        ascend: !doesAscend
      }
    )
  }
  sortByPhone = () => {
    const newOrder = this.state.employees;
    newOrder.sort(function (a, b) {
      return ((this.state.ascend) ? a.cell.localeCompare(b.cell) :
        b.cell.localeCompare(a.cell))
    });
    this.setState({ employees: newOrder })
  }
  sortByEmail = () => {
    const newOrder = this.state.employees;
    newOrder.sort(function (a, b) {
      return ((this.state.ascend) ? a.email.localeCompare(b.email) :
        b.email.localeCompare(a.email))
    });
    this.setState({ employees: newOrder })

  }
  sortByDOB = () => {
    const newOrder = this.state.employees;
    newOrder.sort(function (a, b) {
      return ((this.state.ascend) ? a.dob.date.localeCompare(b.dob.date)
        : b.dob.date.localeCompare(a.dob.date))
    });
    this.setState({ employees: newOrder })

  }
  render() {
    return (
      <div className="App">
        <Navbar handleSearchboxChange={this.handleSearchboxChange} />
        <Table
          employees={this.state.employees}
          onFNameSort={this.sortByFirstName}
          onLNameSort={this.sortByLastName}
          onPhoneSort={this.sortByPhone}
          onEmailSort={this.sortByEmail}
          onDOBSort={this.sortByDOB}
        />
      </div>
    );
  }
}

export default App;
