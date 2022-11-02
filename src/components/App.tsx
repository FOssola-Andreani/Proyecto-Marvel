import React, { useEffect } from 'react';
// import Marvel from './Marvel';
// import { StateContextProvider } from '../context/AppCharacterContext';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

const App = () => {
    useEffect( () => {
        document.addEventListener( "keydown", keyDetected, true );

    }, []);

    const keyDetected = ( e ) => {
        if( (e.which || e.keyCode) == 116){
            e.preventDefault();
        }
        //console.log( "Tecla presionada: ", e.key );

    }

    return(
        <Layout>
            <Login />
        </Layout>
        // <StateContextProvider>
        //     <Marvel />
        // </StateContextProvider>
    );
}

export default App;