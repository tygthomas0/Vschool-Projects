import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        name: "",
        savedNames: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.saveName = this.saveName.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  saveName() {
    var newNamesList = this.state.savedNames
    newNamesList.push(this.state.name);
    this.setState({ name: this.state.name, savedNames: newNamesList })
  }

  render() {
    const savedNames = this.state.savedNames.map(name => <li key={name}>{name}</li>)

    return (
      <div>
        <h1>Your name is: {this.state.name}</h1>
        <input type="text" name="name" value={this.state.name} placeholder="Enter Name Here" onChange={this.handleChange} />
        <button onClick={this.saveName}>Save Name</button>
        <br /><br />
        <label>
          Saved Names:
          <ul>
            {savedNames}
          </ul>
        </label>
      </div>
    );
  }
}

export default App;