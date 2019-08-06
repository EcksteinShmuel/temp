import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state',
      cat: 0
    }
  }
  update ( e ){
    this.setState({txt: e.target.value})
    this.setState({cat: e.target.value})
  }
  
  render(){
    return (
      <div>
        <input type="text"
        onChange={this.update.bind(this)}/>
        <h1> {this.state.txt}  - {this.state.cat}</h1>
        <button>I <Heart /> React </button>
      </div>
    )
  }
}

class Heart extends React.Component {
  render(){
    return <span>love</span>
  }
}

export default App