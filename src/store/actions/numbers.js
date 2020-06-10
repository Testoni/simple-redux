
// action creater
export function changeMinNumber(newNumber) {
    return {
        type: 'NUM_MIN_CHANGED',
        payload: newNumber
    }
}