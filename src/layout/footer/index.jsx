import Image from 'next/image'
import Link from 'next/link'
import SubmitMail from './SubmitMail'
import FollowUs from './FollowUs'
export default function Footer({isMobile}) {
  return (
    <footer className='md:h-[39rem] h-[46.1875rem] w-full flex relative justify-between'>
      <Image
        src={'/images/layout/footer/decoFooter.png'}
        alt='decoration'
        width={1000}
        height={1000}
        className='object-cover absolute md:w-[45%] md:h-full right-0 bottom-0 z-0'
      />
      <div className='w-[38.5rem] h-full max-md:hidden'>
        <Image
          src={'/images/layout/footer/imgFooter.png'}
          alt='hoa dao'
          width={700}
          height={700}
          className='size-full object-cover'
        />
      </div>

      <div className='flex-1 bg-grey-600 md:pb-[1.88rem]  md:pt-[5.13rem] md:pl-[4.31rem] md:pr-[8.25rem]  max-md:pt-[4.31rem] max-md:px-[0.75rem] max-md:pb-[1.37rem]  '>
        <div className=' flex justify-between max-md:flex-col '>
          <div className='md:w-[23.1875rem] relative z-[1]'>
            <Image
              src={'/images/layout/footer/sanyoFooter.png'}
              alt='sanyo'
              width={500}
              height={200}
              className='w-[21.1875rem] h-[2.8125rem] object-cover'
            />
            <p className='md:mt-[1.88rem] md:mb-[1.88rem] mt-[0.94rem] mb-[2.62rem] w-full text-white font-Iciel lg:text-[1rem] md:text-[1.3rem] text-[0.875rem] max-md:italic leading-[1.5rem]'>
              Chúng tôi mang đến những dịch vụ về thang máy một cách hoàn hảo
              nhất
            </p>
            {isMobile && <SubmitMail />}

            {!isMobile && <FollowUs />}
          </div>

          <div className='md:w-[19.5626rem] h-full relative z-[1]'>
            <p className='text-white font-averta lg:text-[1.25rem] md:text-[1.5rem] text-[1.25rem] font-extrabold leding-[2.625rem] md:tracking-[-0.0375rem] uppercase md:mb-[1.44rem] mb-[1rem] max-md:mt-[2.62rem]'>
              LIÊN HỆ VỚI CHÚNG TÔI
            </p>
            <div className='flex items-start mb-[1rem]'>
              <Image
                src={'/images/layout/footer/location.png'}
                alt='location'
                width={50}
                height={50}
                className='w-[1.25rem] h-[1.25rem] mr-[0.62rem] relative top-[0.2rem]'
              />
              <p className='text-white font-Iciel md:text-[1.3rem] text-[0.875rem] lg:text-[1rem] leading-1.5 '>
                Địa chỉ: Số 6BT2 ngõ 66 Kim Giang - Hoàng Mai - Hà Nội
              </p>
            </div>
            <div className='flex items-start mb-[1rem]'>
              <Image
                src={'/images/layout/footer/phone.png'}
                alt='location'
                width={50}
                height={50}
                className='w-[1.25rem] h-[1.25rem] mr-[0.62rem] relative top-[0.2rem]'
              />
              <p className='text-white font-Iciel md:text-[1.3rem] text-[0.875rem] lg:text-[1rem] leading-1.5 '>
                Hotline: 0983859969 - 0393580688
              </p>
            </div>
            <div className='flex items-start mb-[1rem]'>
              <Image
                src={'/images/layout/footer/mail.png'}
                alt='location'
                width={50}
                height={50}
                className='w-[1.25rem] h-[1.25rem] mr-[0.62rem] relative top-[0.2rem]'
              />
              <p className='text-white font-Iciel md:text-[1.3rem] text-[0.875rem] lg:text-[1rem] leading-1.5 '>
                Email: sales@sanyo-yusoki.vn
              </p>
            </div>
            <div className='flex items-start mb-[1rem]'>
              <Image
                src={'/images/layout/footer/earth.png'}
                alt='location'
                width={50}
                height={50}
                className='w-[1.25rem] h-[1.25rem] mr-[0.62rem] relative top-[0.2rem]'
              />
              <p className='text-white font-Iciel md:text-[1.3rem] text-[0.875rem] lg:text-[1rem] leading-1.5 '>
                www.sanyoyusoki.com
              </p>
            </div>
          </div>
        </div>
        {isMobile && <FollowUs />}
        {!isMobile && <SubmitMail />}
        <p className='text-white font-Iciel md:text-[1rem] text-[0.75rem] text-center lg:text-[0.875rem] font-[300] leading-1.5 uppercase opacity-60 md:mt-[1.75rem] mt-[2.62rem]'>
          @2024 SANYO YUSOKI | Designed by OKHUB Agency
        </p>
      </div>
    </footer>
  )
}
