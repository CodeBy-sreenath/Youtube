import React from 'react'
import './TrendingCard.css'
import  BalamPichkari from '../../assets/BalamPichkari.jpg'
import schembakam from '../../assets/schembakam.jpg'
import malayalapuzha from '../../assets/malayalapuzha.jpeg'
import panjabihouse from '../../assets/panjabihouse.jpeg'

const TrendingCard = () => {
  return (
    <div className='TrendingSectionMain'>
      <div className="Cards">
        <img src={BalamPichkari} alt='' />
        <p className='title'>viewers 12333k.10 hours ago</p>

      </div>
       <div className="Cards">
        <img className='chembakam' src={schembakam} alt='' />
        <p className='title'>viewers 12333k.10 hours ago</p>

      </div>
       <div className="Cards">
        <img className='malayalapuzha' src={malayalapuzha} alt='' />
        <p className='title'>viewers 12333k.10 hours ago</p>

      </div>
      

      
      
      
      
    </div>
  )
}

export default TrendingCard
