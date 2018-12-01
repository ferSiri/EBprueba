import React, { Component } from 'react';
import '../App.css';

export default props => (
    <div id="navBar">
        <img src="./logo.png" id="logoEm"></img>
        <input onChange={(e) => props.changeInputValue(e.target.value)} placeholder="Filtrar por apellido" id="inputEm" type="text" name="busqueda"></input>
    </div>

);