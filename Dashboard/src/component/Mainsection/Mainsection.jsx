import React from 'react'
import Cards from '../Cards/Cards'
import './Mainsection.css'
import Table from '../Table/Table'
const Mainsection = () => {
    return (
        <div className='mainsection'>
            <h2>Main Dashboard</h2>
            <Cards></Cards>
            <Table></Table>
        </div>
    )
}

export default Mainsection
