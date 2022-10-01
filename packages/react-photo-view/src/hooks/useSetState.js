import { useReducer } from 'react';
export default function useSetState(initialState) {
    return useReducer((state, action) => ({
        ...state,
        ...(typeof action === 'function' ? action(state) : action),
    }), initialState);
}
