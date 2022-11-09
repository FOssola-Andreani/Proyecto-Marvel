import React, { useEffect, useContext } from "react";
import Card from "./Card";
import axios from 'axios';
import StateProvider from "../context/AppCharacterContext";

export const Marvel = () => {
    const context = useContext( StateProvider );

    useEffect( () => {
        const loadData = async () => {
            const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=74a8fa6b33f00b295f936c66e788375e&limit=16&hash=49e708f3075d5ea69e343462a106223c";

            await axios.get(urlAPI).then((res) => {
                const delArray = ( localStorage.getItem( "removeCharacter" )? localStorage.getItem( "removeCharacter" ): "" ).split( "," );
                context.addCharacter( finalArray( [...res.data.data.results], delArray ) );

            });

        };

        loadData();

    }, []);

    const finalArray = ( charactersArray, deleteArray ) => {
        let ret = charactersArray;
        deleteArray.forEach( (item) => {
            for( let index in ret ){
                if( ret[index].id == parseInt( item ) ){
                    ret.splice( index, 1 );
                }
            }
        });

        return ret;
    }

    const removeCharacter = ( id ) => {
        context.setState( [...state.filter( items => items.id !== id )] );
    }

    return (
        <div className="container">
            <div className="row" id="marvel-row">
                <div className="col">
                    {context.state.map( card => (
                        <div key={card.id}>
                            <Card
                                path={card.thumbnail.path}
                                extension={card.thumbnail.extension}
                                name={card.name}
                                description={card.description}
                                modified={card.modified}
                                id={card.id}
                                handle={() => removeCharacter( card.id )}
                            />
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default Marvel;
