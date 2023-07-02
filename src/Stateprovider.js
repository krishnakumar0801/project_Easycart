import React from 'react'
import { useContext } from 'react';
import { useReducer } from 'react';

export var StateContext =React.createContext()

export var Stateprovider =({reducer,initialstate,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </StateContext.Provider>
)

export var Values =()=> useContext(StateContext);

