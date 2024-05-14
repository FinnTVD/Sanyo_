'use client'
import React, {useRef} from 'react'
import Link from 'next/link'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import {outStandingProject} from '/data/japanElevator'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles.css'
import {Button} from '@/components/ui/button'
import ItemOutStandingProject from '@/components/itemOutstandingProject'

const OutStandingProjectJE = ({isMobile, data}) => {
  const outStandingProjectRef = useRef(null)
  const outStandingProjectEndRef = useRef(null)
  useGSAP(() => {
    !isMobile &&
      gsap.to(outStandingProjectRef.current, {
        scrollTrigger: {
          trigger: outStandingProjectRef.current,
          pin: true,
          start: 'top-=150 top',
          endTrigger: outStandingProjectEndRef.current,
          end: 'bottom center+=20%',
          pinSpacing: false,
          anticipatePin: 1,
        },
      })
  }, [])
  return (
    <section className='pt-[8.69rem] pl-[5.38rem] pr-[3.5rem] flex w-full max-md:flex-col max-md:px-0 max-md:pt-12 max-md:mb-[3rem]'>
      <div
        className='w-[25%] flex flex-col mr-[2%] max-md:w-full'
        ref={outStandingProjectRef}
      >
        {isMobile ? (
          <div>
            <h2
              className='text-[1.5rem] font-SVNLagu font-semibold leading-1.3 px-3 mb-[1.19rem] [&>p>strong]:font-semibold [&>p>strong]:text-c-nht'
              dangerouslySetInnerHTML={{__html: data?.title_mb}}
            ></h2>
          </div>
        ) : (
          <div className=''>
            <h2
              className='text-[3rem] font-SVNLagu font-semibold leading-1.2 mb-[1.2rem] [&>p>strong]:font-semibold [&>p>strong]:text-c-nht'
              dangerouslySetInnerHTML={{__html: data?.title}}
            ></h2>
            <span
              className='font-Iciel text-base font-normal leading-1.5 mb-[2.24rem]'
              dangerouslySetInnerHTML={{__html: data?.desc}}
            ></span>
          </div>
        )}
        <Link href={'/du-an'}>
          <Button
            className='w-fit max-md:hidden mt-[2.44rem]'
            isRed={true}
            text='Xem tất cả'
            isHover={true}
            isBlack={true}
            classHover={'group-hover'}
            classtext={'group-hover:text-white'}
          />
        </Link>
      </div>
      {isMobile ? (
        <div className='mbOutStandingSLide'>
          <Swiper
            speed={15000}
            pagination={{
              type: 'progressbar',
              el: '.processSlideOutStandingJE',
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                spaceBetween: 0,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className='mySwiperOnlyImages w-screen order-1 overflow-hidden'
          >
            {outStandingProject.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`h-[17.125rem] pl-3`}
              >
                <ItemOutStandingProject
                  key={index}
                  width='full'
                  height='full'
                  imgFlagUrl={item.imgFlagUrl}
                  className={`rounded-[0.75rem] w-full h-full `}
                  altImageFlag={item.altFlag}
                  nameProject={item.nameProject}
                  imgProjectUrl={item.imgProjectUrl}
                  altImageProject={item.alt}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='mt-[1.31rem] flex px-3 justify-between mbOutStandingSLideBtn'>
            <Link href={'/du-an'}>
              <Button
                className='w-fit border-[#FE4127] hover:border-[#FE4127]'
                isRed={true}
                text='Xem tất cả'
                isHover={false}
                isBlack={true}
                classHover={'group-hover'}
                classtext={'!text-c-nht'}
              />
            </Link>
            <div className='relative w-[6.25rem]'>
              <div className='processSlideOutStandingJE rounded-full'></div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='flex flex-wrap w-[73%]'
          ref={outStandingProjectEndRef}
        >
          {outStandingProject.map((item, index) => (
            <ItemOutStandingProject
              key={index}
              width='32.1875rem'
              height='25.5rem'
              imgFlagUrl={item.imgFlagUrl}
              className={`rounded-[0.75rem] w-[32.1875rem] h-[25.5rem] ${
                (index + 1) % 2 === 0 ? 'lg:ml-4 mb-4 md:ml-2 ' : ''
              }`}
              altImageFlag={item.altFlag}
              nameProject={item.nameProject}
              imgProjectUrl={item.imgProjectUrl}
              altImageProject={item.alt}
              link={item.link}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default OutStandingProjectJE
