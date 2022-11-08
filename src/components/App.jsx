import React, { useContext } from 'react';
import Marvel from './Marvel';
import StateProvider from '../context/AppCharacterContext';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

const App = () => {
    const context = useContext( StateProvider );
    // useEffect( () => {
    //     document.addEventListener( "keydown", keyDetected, true );

    // }, []);

    // const keyDetected = ( e ) => {
    //     if( (e.which || e.keyCode) == 116){
    //         e.preventDefault();
    //     }

    // }

    //alert( context.isLogin );

    return(
        <React.StrictMode>
            <Layout>
                    {context.isLogin === "false" ? <Login />: <Marvel />}
                    {/* {context.isLogin === "false" && <Login />}
                    {context.isLogin === "true" && <Marvel />} */}
            </Layout>
        </React.StrictMode>
    );
}

export default App;