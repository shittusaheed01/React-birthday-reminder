import React, { Component } from 'react';
import List from "./list"
import Data from "./data"
import "./App.css"
class App extends Component {
  state = { 
    data : Data
  }
  handleClear = () =>{
    this.setState({
      data : []
    })
  }
  handleDelete = (idd)=> {
    const filter = this.state.data.filter(item => item.id !== idd)
      this.setState({
        data: filter
      })
    // console.log("clicked", idd)
  }
  render() { 
    return (
      <div className="body">
        <h1 className="list-number">There are {this.state.data.length} birthdays today</h1>
        {this.state.data.map((item) => (
          <List
            name={item.name}
            age={item.age}
            image={item.image}
            key={item.id}
            id = {item.id}
            onDelete = {this.handleDelete}
          />
        ))}
        <button className ="clear" onClick={this.handleClear}>Clear All</button>
      </div>
    );
  }
}

export default App;