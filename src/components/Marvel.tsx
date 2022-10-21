import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from 'axios';

export const Marvel = () => {
    const [data, setData] = useState( [] );

    useEffect( async () => {
        const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=74a8fa6b33f00b295f936c66e788375e&limit=16&hash=49e708f3075d5ea69e343462a106223c";

        const response = await axios( urlAPI );
        setData( response.data.data.results );

    }, []);

    return (
        <div className="container">
            <div className="row" id="marvel-row">
                <div className="col">
                    {data.map( card => (
                        <Card
                            path={card.thumbnail.path}
                            extension={card.thumbnail.extension}
                            name={card.name}
                            description={card.description}
                            modified={card.modified}
                            id={card.id}
                        />
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default Marvel;
