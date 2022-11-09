import React, { createContext, useState } from "react";

const StateProvider = createContext({});

export const StateContextProvider = ( {children} ) => {
    const [isLogin, setIsLogin] = useState( localStorage.getItem( "isLogin" )? localStorage.getItem( "isLogin" ): "false" );
    const [state, setState] = useState( 
        [{
            "id": 1011334,
            "name": "",
            "description": "",
            "modified": "",
            "thumbnail": {
              "path": "https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading",
              "extension": "gif"
            }
        }]
    );

    const addCharacter = ( payload ) => {
        setState( payload );
    }

    const removeCharacter = ( id ) => {
        const currentArray = state;
        const character = currentArray.findIndex( ( x ) => x.id === id );
        currentArray.splice( character, 1 );
        setState( [...currentArray] );

        const newItem = id.toString();
        const delArray = (localStorage.getItem( "removeCharacter" )? localStorage.getItem( "removeCharacter" ): "");

        localStorage.setItem( "removeCharacter", ( delArray?.trim()? delArray + ", " + newItem: delArray + newItem ) );

    }

    const loginOk = () => {
        setIsLogin( "true" );
        localStorage.setItem( "isLogin", "true" );

    }

    const logOut = () => {
        setIsLogin( "false" );
        localStorage.setItem( "isLogin", "false" );
    }

    return(
        <StateProvider.Provider value={{state, setState, addCharacter, removeCharacter, isLogin, loginOk, logOut}}>
            {children}
        </StateProvider.Provider>
    );
};

export default StateProvider;