import React, { useContext } from 'react';
import Marvel from './Marvel';
import StateProvider from '../context/AppCharacterContext';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

const App = () => {
    const context = useContext( StateProvider );

    return(
        <React.StrictMode>
            <Layout>
                    {context.isLogin === "false" ? <Login />: <Marvel />}
            </Layout>
        </React.StrictMode>
    );
}

export default App;