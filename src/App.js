import React from 'react';
import logo from './logo.svg';
import './App.css'
import Block from "./Block.js"
import buttons from "./buttons.json"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: [],
      buttons: buttons.buttons,
      additions: buttons.additions
    }
    this.ShowNumber = this.ShowNumber.bind(this)
    this.Evaluate = this.Evaluate.bind(this)
    this.Clear = this.Clear.bind(this)
  }

  ShowNumber = (event) => {
    const number = event.target.innerHTML
    const Values = this.state.view
    Values.push(number)
    this.setState({
      view: Values
    })
  }

  Evaluate = () => {
    const Values = this.state.view
    let answer = eval(Values.join(""))
    this.setState({
      view: [answer]
    })
  }

  Clear = () => {
    this.setState({
      view: []
    })
  }

  render() {
    const that = this
    return (<div className="main">
      {this.state.buttons.map(function (eachButton) {
        return (<div>
          <Block onClick={that.ShowNumber} buttons={eachButton} />
        </div>)
      })}
      {this.state.additions.map(function (eachButton) {
        return (<div>
          <Block onClick={that.ShowNumber} buttons={eachButton} />
        </div>)
      })}
        <p className="buttons" onClick={this.Clear}>Clear</p>
        <p className="buttons" onClick={this.Evaluate}>=</p>
        <p className="answer">{this.state.view}</p>
    </div>)
  }
}

export default App