import React, { useContext } from 'react';
import StateProvider from "../context/AppCharacterContext";

const Character = ({ image, name, description, modified, id, handle }) => {
    const context = useContext( StateProvider );

    const handleClick = ( id ) => {
        context.removeCharacter( id );

    };

    return(
        <div className="row g-0">
            <div className="col-md-4">
                <img src={image} alt={name} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b>Descripci&oacute;n: </b>{description}</p>
                    <p className="card-text"><b>Modificado: </b>{modified}</p>
                    {/* <p className="card-text"><b>Id: </b>{id}</p> */}
                    <button onClick={() => handleClick( id )}>Eliminar de la lista</button>
                </div>
            </div>
        </div>
    );
}

export default Character;