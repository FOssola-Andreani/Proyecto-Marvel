import React from 'react';
import '../styles/Card.scss';

const Card = ({ path, extension, name }) => {
    const imgSource = `${path}.${extension}`;

    return(
        <card className="card">
            <img src={imgSource} alt={name} className="img-thumbnail" />
            <h3 className="title">{name}</h3>
        </card>
    );
}

export default Card;