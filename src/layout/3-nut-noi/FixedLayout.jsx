'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef} from 'react'
import {ScrollSmoother} from 'gsap/ScrollSmoother'

export default function FixedLayout() {
  const myRef = useRef(null)
  const smootherRef = useRef(null)
  useEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      effects: true,
    })
  }, [])
  useEffect(() => {
    const length = myRef.current.getTotalLength()
    myRef.current.style.strokeDasharray = length
    myRef.current.style.strokeDashoffset = length
    function myFunction() {
      const scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
      const draw = length * scrollpercent
      myRef.current.style.strokeDashoffset = length - draw
    }
    window.addEventListener('scroll', myFunction)
    return () => window.removeEventListener('scroll', myFunction)
  }, [])
  return (
    <div className='z-30 fixed bottom-6 right-6 flex flex-col gap-[1.38rem]'>
      <Link href={`/`}>
        <Image
          src={`/images/layout/3-nut-noi/call.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[3.125rem] object-cover'
        />
      </Link>
      <Link href={`/`}>
        <Image
          src={`/images/layout/3-nut-noi/messenger.svg`}
          alt=''
          width={120}
          height={120}
          className='size-[3.125rem] object-cover'
        />
      </Link>
      <button onClick={() => smootherRef.current.scrollTop(0)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='56'
          height='56'
          viewBox='0 0 56 56'
          fill='none'
          className='size-[3.125rem] object-cover'
        >
          <path
            d='M28.0977 20L19.0977 31.4286L25.8477 31.4286L28.0977 36L30.3477 31.4286L37.0977 31.4286L28.0977 20Z'
            fill='#DAB571'
          />
          <rect
            ref={myRef}
            x='0.5'
            y='0.5'
            width='55'
            height='55'
            rx='27.5'
            stroke='#DAB571'
          />
        </svg>
      </button>
    </div>
  )
}