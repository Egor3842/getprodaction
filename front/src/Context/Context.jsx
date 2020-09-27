import React from 'react'

export const initialState = {
    isAuth: false,
    login: 'admin',
    password: '111',
    infoData:[]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login': {
            return { ...state, isAuth: true }
        }
        case 'logout': {
            return { ...state, isAuth: false }
        }
        case 'setData': {
            return { ...state, infoData: [...action.infoData] }
        }
        default:
            return state
    }
}


export const Context = React.createContext()
