import React, { useContext } from 'react';
import Marvel from './Marvel';
import StateProvider from '../context/AppCharacterContext';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Header from './/Header';

const App = () => {
    const context = useContext( StateProvider );

    return(
        <React.StrictMode>
            <Layout>
                    {context.isLogin === "false" ? <Login />: <Header><Marvel /></Header>}
            </Layout>
        </React.StrictMode>
    );
}

export default App;