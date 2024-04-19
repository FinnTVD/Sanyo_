import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import imgPlus from '../../../public/images/components/reasonChoose/iconPlus.svg'
import imgArrow from '../../../public/images/components/reasonChoose/row.svg'
import bgItemOutStandingProject from '../../../public/images/components/reasonChoose/lydoluachon1.png'
import flagImg from '../../../public/images/components/itemOutstandingProject/flag.png'
import './styles.css'
const ItemOutStandingProject = () => {
  return (
    <div className='itemOutstandingProject relative w-[32.21569rem] h-[35.503rem] md:rounded-[1.25rem] rounded-[0.75rem] overflow-hidden flex justify-center  items-end max-md:w-[19.10188rem] max-md:h-[17.125rem]'>
      <Image
        src={bgItemOutStandingProject}
        alt='bgItemOutStandingproject'
        className='absolute -z-10 w-full h-full object-cover'
      />
      <Link
        className='itemOutStandingProject_overlay max-md:flex-col flex relative h-fit backdrop-blur-[12.5px] rounded-[0.5rem] justify-between md:items-center
          md:pl-[1.44rem] md:pr-[2.06rem]
          bottom-[0.59rem] pt-[1.19rem] pl-[1.06rem] pb-[0.7rem] pr-[1.12rem]'
        href={'/'}
      >
        <Image
          src={flagImg}
          alt='flag'
          className='w-[3.375rem] h-[2.25rem] mr-3 max-md:w-[1.62794rem] max-md:h-[1.08531rem] max-md:mb-[0.36rem]'
        />
        <Image
          src={'/images/components/reasonChoose/Hoverbox.svg'}
          alt='box'
          width={200}
          height={200}
          quality={100}
          className='absolute inset-0 w-full borderImgItemoutStandingProject max-md:hidden'

        />
        <div className='flex items-center'>
        <span className='w-[19.75rem] font-Iciel text-[0.875rem] font-normal leading-1.5 text-white max-md:w-[14.1875rem] max-md:text-[0.75rem] text-ellipsis line-clamp-2'>
          GNASSINGBE EYADEMA INTERNATIONAL AIRPORT NEW TERMINAL
        </span>
        <div>
          <div className='relative flex overflow-hidden h-[2.125rem] w-[2.125rem] max-md:w-[0.76456rem] max-mdL:h-[0.76456rem]'>
            <Image
              alt='icon'
              src='/images/components/reasonChoose/row.svg'
              width={100}
              height={100}
              className='iconArrowOutstanding absolute w-full h-full right-full top-0'
            />
            <Image
              src='/images/components/reasonChoose/iconPlus.svg'
              width={100}
              height={100}
              className='iconPlusOutstanding absolute w-full h-full top-0 left-0'
              alt='icon'
            />
          </div>
        </div>
        </div>

      </Link>
    </div>
  )
}

export default ItemOutStandingProject