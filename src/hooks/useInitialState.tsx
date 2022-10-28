import { useState } from 'react';

const initialState = 
        [{
        "id": 1011334,
        "name": "3-D Man",
        "description": "",
        "modified": "2014-04-29T14:18:17-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
          "extension": "jpg"
        }}];

const useInitialState = () => {
    const [state, setState] = useState( initialState );

    return {
        state,
        setState
    };

}

export default useInitialState;