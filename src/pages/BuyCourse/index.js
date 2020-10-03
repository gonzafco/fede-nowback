import React from 'react'
import HeroLogin from '../../components/HeroLogin'
import BannerLogin from '../../components/BannerLogin'
import PriceCourse from '../../components/PriceCourse'
import CuponCode from '../../components/CuponCode'


export default function BuyCurse() {
  return (
    <div>
      <HeroLogin/>
      <BannerLogin text="TU IMAGEN IMPORTA"/>      
      <PriceCourse price={999} />
      <CuponCode />
    </div>
  )
}
