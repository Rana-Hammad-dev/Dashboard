import React from 'react'
import Update from '../Update/Update'
import './RightSidebar.css'
import Customer from '../Customer/Customer'

const RightSidebar = () => {
    return (
        <div className='rightsidebar'>
            <div className='updatesection'>
                <h3>Updates</h3>
                <Update />
            </div>
            <div className='customersection'>
                <h3>Customer Review</h3>
                <Customer />
            </div>
        </div>
    )
}

export default RightSidebar
