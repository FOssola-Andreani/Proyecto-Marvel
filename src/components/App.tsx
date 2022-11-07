import React from 'react';
import Marvel from './Marvel';
import { StateContextProvider } from '../context/AppCharacterContext';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

const App = () => {
    // useEffect( () => {
    //     document.addEventListener( "keydown", keyDetected, true );

    // }, []);

    // const keyDetected = ( e ) => {
    //     if( (e.which || e.keyCode) == 116){
    //         e.preventDefault();
    //     }

    // }

    return(
        <React.StrictMode>
            <Layout>
                <Login>
                    <StateContextProvider>
                        <Marvel />
                    </StateContextProvider>
                </Login>
            </Layout>
        </React.StrictMode>
    );
}

export default App;