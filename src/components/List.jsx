import React, { Component } from 'react';

export default props => (
    <div className="containerList">
        <table id="table">
            <thead id="head">
                <tr >
                    <th >Nombre</th>
                    <th> Apellido</th>
                    <th> Teléfono</th>
                    <th> Dirección</th>
                    <th> Imagen de Usuario</th>
                </tr>
            </thead>
            <tbody>
                {props.personas &&
                    props.personas.map((elem) => {
                        return (
                            <tr onClick={() => { props.changeSelected(elem) }} className="lista">
                                <td className="listCol">
                                    {elem.name.first}
                                </td>
                                <td className="listCol">
                                    {elem.name.last}
                                </td>
                                <td className="listCol">
                                    {elem.cell}
                                </td>
                                <td className="listCol">
                                    {elem.location.street}
                                </td>
                                <td className="listCol">
                                    <img src={elem.picture.thumbnail}></img>
                                </td>
                            </tr>)
                    })}
            </tbody>
        </table>
    </div>

);