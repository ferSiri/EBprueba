//DEPENDENCIAS
import React, { Component } from 'react';
import axios from 'axios';
//COMPONENTES
import Navbar from './components/Navbar';
import List from './components/List';
import SinglePerson from './components/SinglePerson';
//CSS
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      personas: [],
      selected: {}
    }
    this.changeSelected = this.changeSelected.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.backToMain = this.backToMain.bind(this);
  }
  changeSelected(object) {
    this.setState({ selected: object })
  }
  backToMain() {
    this.setState({ selected: {} })
  }
  changeInputValue(val) {
    this.setState({ inputValue: val })
  }
  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=20')
      .then((res) => this.setState({ personas: res.data.results }))
  }
  render() {
    const personasFiltradas = this.state.personas.filter(persona => persona.name.last.toLowerCase().match(this.state.inputValue.toLowerCase()))
    return (
      <div className="App">
        <Navbar changeInputValue={this.changeInputValue} />
        {this.state.selected.name ? <SinglePerson backToMain={this.backToMain} selected={this.state.selected} /> : <List changeSelected={this.changeSelected} personas={personasFiltradas} />}
      </div>
    );
  }
}

export default App;
