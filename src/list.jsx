import React, { Component } from 'react';

class List extends Component {
  state = {  }
  render() { 
    return (
      <div className="list-items">
        <div className="list-card">
          <div className="image-div">
            <img
              className="list-image"
              src={this.props.image}
              alt={this.props.name}
            />
          </div>
          <div className="list-details">
            <h1 className="list-name">{this.props.name}</h1>
            <p className="list-age">{this.props.age} years</p>
          </div>
        </div>
        <button onClick={() => this.props.onDelete(this.props.id)} className="list-button">Delete</button>
      </div>
    );
  }
}

export default List;
