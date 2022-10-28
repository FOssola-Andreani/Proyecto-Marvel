import React, { createContext, useState } from "react";

const StateProvider = createContext({});

export const StateContextProvider = ( {children} ) => {
    const [state, setState] = useState( 
        [{
            "id": 1011334,
            "name": "3-D Man",
            "description": "",
            "modified": "2014-04-29T14:18:17-0400",
            "thumbnail": {
              "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              "extension": "jpg"
            }
        }]
    );

    const removeCharacter = ( id ) => {
        const currentArray = state;
        const character = currentArray.findIndex( ( x ) => x.id === id );
        currentArray.splice( character, 1 );
        setState( [...currentArray] );
    }

    return(
        <StateProvider.Provider value={{state, setState, removeCharacter}}>{children}</StateProvider.Provider>
    );
};

export default StateProvider;