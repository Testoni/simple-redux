import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numbers: function(state, action) {
        switch (action.type) {
            case 'NUM_MIN_CHANGED':
                return {
                    ...state,
                    min: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
                }
        }
    },
    names: function(state, action) {
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig