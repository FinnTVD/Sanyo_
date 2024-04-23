import React from 'react'
import CountUp from './countUp/CountUp'
import ValueDifferent from './valueDifferent/ValueDifferent'
import PlatFormElevator from '@/components/platForm'
import PlatFormMobile from '@/components/platFormMobile'
import PartnerSection from '@/sections/about-us/PartnerSection'
import SlideBanner from './slideBanner/SlideBanner'
import OutStandingProject from './outStandingProject/OutStandingProject'
import News from './news/News'
import OutStandingProjectMb from './outStandingProjectMb'

export default function HomePage({isMobile}) {
    console.log(isMobile);
  return (
    <div>
      <SlideBanner  isMobile={isMobile} />
      <CountUp isMobile={isMobile} />
      <ValueDifferent isMobile={isMobile} />
      {!isMobile ? <PlatFormElevator /> : <PlatFormMobile />}
      {!isMobile? <OutStandingProject /> : <OutStandingProjectMb/>}
      <News />
      {/* <PartnerSection isMobile={isMobile} /> */}
    </div>
  )
}
