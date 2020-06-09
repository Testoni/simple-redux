import './Interval.css'
import React from 'react'
import Card from './Card'

export default props => {
    const { min, max } = props
    return (
        <Card title='Numbers Interval' red>
        <div className='Interval'>
            <span>
                <strong>Min:</strong>
                <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)} />
            </span>
            <span>
                <strong>Max:</strong>
                <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} />
            </span>
        </div>
        </Card>
    )
}