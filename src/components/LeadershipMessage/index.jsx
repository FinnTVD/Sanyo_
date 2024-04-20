'use client'
import React from 'react'
import imgLeadership from '../../../public/images/aboutUs/lanhdao.png'
import imgBgLeadership from '../../../public/images/aboutUs/bglanhdao.png'
import imgDaupphay from '../../../public/images/aboutUs/dauphay.png'
import imgBgMbLeadership from '../../../public/images/aboutUs/bgmblandao.png'
import Image from 'next/image'

const LeadershipMesssage = () => {
  //xử lý mặt trời mọc
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function () {
      var sunImg = document.getElementById('sunImg')
      var target = document.getElementById('sharingLeader')
      var targetPosition = target.offsetTop - 800
      sunImg.style.transition = 'top 1s ease'
      if (window.scrollY >= targetPosition) {
        if (window.innerWidth < 768) {
          sunImg.style.top = '-12%'
        } else {
          sunImg.style.top = '17%'
        }
      }
    })
  }
  return (
    <div
      className='sharingLeader relative pt-12  flex flex-col'
      id='sharingLeader'
    >
      <div className='absolute w-[4rem] h-[2.3125rem] bg-yellow-500 bg-opacity-10 top-0 left-0'>
        <div className='absolute w-4 h-4 bg-yellow-500 bg-opacity-10 top-[2.3125rem] left-[4rem]'></div>
      </div>
      <Image
        src={imgBgLeadership}
        alt='bgLeadership'
        className='absolute -z-10 top-0 left-0 w-full h-full max-md:hidden object-cover'
      />
      <Image
        src={imgBgMbLeadership}
        alt='bgLeadership'
        className='absolute -z-10 top-0 left-0 w-full h-full hidden max-md:block object-cover'
      />
      <div className='flex overflow-hidden w-full max-md:flex-row-reverse max-md:px-4 max-md:items-center pt-12 max-md:pr-0'>
        <div className='relative w-[40%] flex justify-end '>
          <div
            className='sunImg w-[32.8125rem] h-[32.8125rem] bg-[#DAB571] absolute -z-[1] rounded-[50%] right-0 top-[100%] transition max-md:w-[9.25rem] max-md:bg-transparent max-md:h-[9.25rem] max-md:bg-[linear-gradient(180deg,_#DAB571_0%,_rgba(218,_181,_113,_0.00)_62.11%)] max-md:left-[-3%]'
            id='sunImg'
          ></div>
          <Image
            src={imgLeadership}
            alt='leadership'
            className='w-[20.9375rem] h-[40.375rem] max-md:w-[7.375rem] max-md:h-[12.625rem] max-md:mr-2'
          />
        </div>
        <div className='w-[60%] pl-[3.12rem] pt-[5%] max-md:pl-0'>
          <div className='w-[47rem] relative'>
            <Image
              src={imgDaupphay}
              alt='dauphay'
              className='w-16 h-[3.3125rem] top-0 right-0 absolute max-md:hidden'
            />
            <h2 className='font-SVNLagu text-[1.25rem] uppercase font-medium leading-1.5 mb-[1.56rem] text-[#484F57] opacity-80 max-md:text-[0.625rem] max-md:mb-2'>
              chia sẻ từ BAN lãnh đạo
            </h2>
            <h3 className='w-[44.25rem] font-SVNLagu text-[2.25rem] font-semibold leading-1.4 mb-2 max-md:w-[14.4375rem] max-md:text-[0.9375rem]'>
              Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền tảng
              vững chắc là nền tảng của sự phát triển chất lượng"
            </h3>
            <p className='w-[43.125rem] font-Iciel text-base leading-1.5 font-normal mb-[3.12rem] text-grey-900 max-md:hidden'>
              Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền tảng
              vững chắc là nền tảng của sự phát triển chất lượng". Chúng tôi
              liên tục nâng cao năng lực R&D của mình cho đầy đủ các sản phẩm
              thang máy, nỗ lực cung cấp thang máy an toàn hơn và hiệu suất cao
              hơn cho toàn xã hội. Nỗ lực này nhằm đạt được sự công nhận toàn
              cầu về những phát triển mới trong ngành thang máy.
            </p>
            <span className='font-Iciel font-bold leading-1.5 text-[1.25rem] text-grey-900 max-md:hidden'>
              CEO SANYO YUSOKI
            </span>
          </div>
        </div>
      </div>
      <div className='w-full px-4 md:hidden '>
        <div className='bg-[linear-gradient(180deg,_rgba(209,179,123,0.40)_0%,_rgba(255,255,255,0.40)_19.12%)] border-yellow-500 border-[1px] px-4 pt-6 rounded-xl border-opacity-60 pb-6'>
          <p className='text-justify font-Iciel text-xs font-normal leading-1.5 pb-4'>
            Tập đoàn thang máy Sanyo luôn tôn trọng niềm tin rằng "nền tảng vững
            chắc là nền tảng của sự phát triển chất lượng". Chúng tôi liên tục
            nâng cao năng lực R&D của mình cho đầy đủ các sản phẩm thang máy, nỗ
            lực cung cấp thang máy an toàn hơn và hiệu suất cao hơn cho toàn xã
            hội. Nỗ lực này nhằm đạt được sự công nhận toàn cầu về những phát
            triển mới trong ngành thang máy.
          </p>
          <div className='flex flex-col'>
            <span className='font-Iciel text-[0.625rem] font-normal leading-1.5 mb-1'>
            Chia sẻ từ
            </span>
            <span className='italic text-xs font-normal leading-1.5'>
            CEO SANYO YUSOKI
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadershipMesssage
