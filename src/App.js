import React, { Component } from 'react';
import './App.css';
import Board from './Board';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Clock extends Component {
  constructor(props) {
      super(props);
      this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(
      this.tick.bind(this),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
      return (
          <div className='time'>
            The time is {this.state.date.toLocaleTimeString()}
          </div>
      )
  }
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      (prevState) => {
        return {
          toggle: !prevState.toggle
        };
      }
    )
  }

  render() {
    return (
      <div className='toggle' onClick={this.handleClick}>
        Toggle: {this.state.toggle? 'ON' : 'OFF'}
      </div>
    )
  }
}

function ListItems(props) {
  return (
    <ul>
      {props.numbers.map((number) =>
        <li key={number.toString()}>
          {number}
        </li>
      )}
    </ul>
  );
}

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
      console.log(this.state.value);
      event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
};

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state={
      celcius: '0',
      faren: '0'
   };

    this.handleCelciusChange = this.handleCelciusChange.bind(this);
    this.handleFarenheitChange = this.handleFarenheitChange.bind(this);
  }

  handleCelciusChange(event) {
    const faren = event.target.value;
    const celcius = tryConvert(faren, (f) => {
      return (f - 32) * 5/9;
    });
    this.setState({ faren: faren, celcius: celcius });
  }

  handleFarenheitChange(event) {
    const celcius = event.target.value;
    const faren = tryConvert(celcius, (c) => {
      return (c * 9 / 5) +32;
    });
    this.setState({ faren: faren, celcius: celcius });
  }

  render() {
    return (
      <fieldset>
        <TemperatureInput value={this.state.celcius} type='celcius' handleChange={this.handleFarenheitChange} />
        <TemperatureInput value={this.state.faren} type='farenheit' handleChange={this.handleCelciusChange} />
      </fieldset>
    );
  }
};

class TemperatureInput extends Component {
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event);
  }

  render() {
    return (
      <fieldset> {this.props.type} :
        <input value={this.props.value} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function BoilingPoint(props) {
  if(props.celcius > 100) {
    return <p>Boiling point reached</p>;
  } else {
    return <p>Boiling point not reached</p>;
  }
}

class App extends Component {
  render() {
    const numbers = [ 1, 2, 3 ];
    return (
      <div id='root'>
        <Welcome name='Balaji' />
        <Clock />
        <Toggle />
        <ListItems numbers={numbers} />
        <NameForm />

        <Calculator />

        <Board />
      </div>
    );

  }
}

export default App;
