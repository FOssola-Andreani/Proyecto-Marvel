import React from 'react';
import Character from './Character';
import '../styles/Card.scss';

const Card = ({ path, extension, name, description, modified, id, handle }) => {
    const imgSource = `${path}.${extension}`;

    return(
        <div className="card">
            <Character
                image={imgSource}
                name={name}
                description={description}
                modified={modified}
                id={id}
                handle={handle}
            />
        </div>
    );
}

export default Card;