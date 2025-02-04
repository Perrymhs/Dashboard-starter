import React from 'react'
import Updates from '../Updates/Updates'
import './RightSide.css'

import CustomerReview from '../CustomerReview/CustomerReview'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h3>Updates</h3>
            <Updates/>
        </div>
        <div>
            <h3>Costumers Reviews</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide