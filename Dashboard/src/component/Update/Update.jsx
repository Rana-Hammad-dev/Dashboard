import React from 'react'
import './Update.css'
import { UpdatesData } from '../../Data/Data'

const Update = () => {
    return (
        <div className='update'>
            {UpdatesData.map((review, index) => {
                return (
                    <div className="reviewCard" key={index}>
                        <img src={review.img} alt="image" />
                        <div className='information'>
                            <p><h3>{review.name}</h3> {review.noti}</p>
                            <span id='time'>{review.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Update
