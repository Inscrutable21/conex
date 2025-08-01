import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-col sm:mb-20 mb-6`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-6xl">
        {stats.map((stat) => (
          <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
