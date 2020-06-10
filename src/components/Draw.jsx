import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

function Draw(props) {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title='Numbers Draw' purple>
        <div>
            <span>
                <span>Result:</span>
                <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Draw)