import React from 'react'
import JapanElevator from '@/sections/JapanElevator'
export default function page({searchParams,params}) {
  const {viewport} = searchParams
  console.log(searchParams);
  const isMobile = viewport?.includes('mobile')
  return <JapanElevator isMobile={isMobile}/>
}
