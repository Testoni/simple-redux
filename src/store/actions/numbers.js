
// action creater
export function changeMinNumber(newNumber) {
    return {
        type: 'NUM_MIN_CHANGED',
        payload: newNumber
    }
}
// action creater
export function changeMaxNumber(newNumber) {
    return {
        type: 'NUM_MAX_CHANGED',
        payload: newNumber
    }
}