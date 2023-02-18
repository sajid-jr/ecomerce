import React from 'react'
import './mainComponent.css'
import product from '../assets/Images/product.png'

const RecommededProductBox = () => {
  return (
    <div className='recommendedItemContainer'
    >
        <img width={'100%'} height= '75%' src={product}/>
        <h4>Classic Blouse IX</h4>
        <h6>$1000</h6>
    </div>
  )
}

export default RecommededProductBox