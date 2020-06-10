import './Interval.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { changeMinNumber } from '../store/actions/numbers'

function Interval(props) {
    const {min, max} = props
    return (
        <Card title='Numbers Interval' red>
        <div className='Interval'>
            <span>
                <strong>Min:</strong>
                <input type="number" value={min} />
            </span>
            <span>
                <strong>Max:</strong>
                <input type="number" value={max} />
            </span>
        </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

function mapActionCreatorsToProp(dispatch) {
    return {
        changeMin(newNumber) {
            // action creator -> action
            const action = changeMinNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(Interval)