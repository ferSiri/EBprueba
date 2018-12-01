import React, { Component } from 'react';

export default props => (
    <div>
        <button onClick={() => props.backToMain()} id="bEm">Volver a principal</button>
        <div id="containerSingle">
            <img src={props.selected.picture.large}></img>
            <div id="singleText">
                <p>Título: {props.selected.name.title}</p>
                <p>Nombre: {props.selected.name.first}</p>
                <p>Apellido: {props.selected.name.last}</p>
                <p>Género:{props.selected.gender}</p>
                <p>Edad:{props.selected.dob.age} </p>
                <p>Email:{props.selected.email}</p>
                <p>Teléfono:{props.selected.cell}</p>
                <p>Dirección:{props.selected.location.street}</p>
            </div>
        </div>
    </div>
);