import React from 'react'
import Chart from '../../customer/components/chart/Chart';
import FeaturedInfo from '../../customer/components/featuredInfo/FeaturedInfo';
import './home.css';

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart/>
    </div>
  )
}

export default Home
