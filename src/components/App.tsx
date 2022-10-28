import React from 'react';
import Marvel from './Marvel';
import { StateContextProvider } from '../context/AppCharacterContext';

const App = () => {
    return(
        <StateContextProvider>
            <Marvel />
        </StateContextProvider>
    );
}

export default App;