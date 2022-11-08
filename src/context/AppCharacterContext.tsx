import React, { createContext, useState } from "react";

const StateProvider = createContext({});

export const StateContextProvider = ( {children} ) => {
    const [isLogin, setIsLogin] = useState( localStorage.getItem( "isLogin" )? localStorage.getItem( "isLogin" ): "false" );
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

    const addCharacter = ( payload ) => {
        setState( payload );
    }

    const removeCharacter = ( id ) => {
        const currentArray = state;
        const character = currentArray.findIndex( ( x ) => x.id === id );
        currentArray.splice( character, 1 );
        setState( [...currentArray] );
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
        <StateProvider.Provider value={{state, setState, addCharacter, removeCharacter, isLogin, loginOk, logOut}}>{children}</StateProvider.Provider>
    );
};

export default StateProvider;