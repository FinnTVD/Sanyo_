import Image from 'next/image'

import './style.css'
import Link from 'next/link'

export default function ReasonChoose({data}) {
  return (
    <div className='md:rounded-[1.25rem] rounded-[0.75rem] flex justify-center items-end relative reason_item w-full md:h-[32.262rem] object-cover h-[24.6875rem]'>
      <Image
        src={data?.image?.url}
        alt={data?.image?.alt || 'nothing'}
        width={800}
        height={500}
        className='w-full absolute h-full object-cover md:rounded-[1.25rem] rounded-[0.75rem]'
      />
      <Link
        className=' max-md:flex-col flex overflow-hidden relative h-fit backdrop-blur-[12.5px] rounded-[0.75rem] justify-between md:items-center
          md:pl-[1.44rem] md:pr-[2.06rem]
          bottom-[0.59rem] pt-[1.19rem] pl-[1.06rem] pb-[1.06rem] pr-[1.12rem] reason_overlay'
        href={'/'}
      >
        <Image
          src='/images/components/reasonChoose/test.svg'
          alt='box'
          width={200}
          height={200}
          className='absolute inset-0 w-full max-lg:hidden'
        />
        <div className='md:w-[21.875rem] max-md:mb-[1.06rem]'>
          <h4 className='font-SVNLagu md:text-[0.875rem] font-[600] md:leading-[1.5] text-grey-50'>
            {data?.title}
          </h4>
          <p className='font-Iciel lg:text-[0.875rem] text-[0.75rem] leading-[1.5] opacity-80 text-white'>
            {data?.description}
          </p>
        </div>

        <div className='flex items-center'>
          <span className='md:hidden text-white font-Iciel text-[0.625rem] font-medium leading-[1.4] opacity-80'>
            Tìm hiểu thêm
          </span>
          <Image
            src='/images/components/reasonChoose/iconPlus.svg'
            width={120}
            height={120}
            className='md:w-[2.125rem] md:h-[2.125rem] max-md:hidden'
            alt='icon'
          />
          <Image
            alt='icon'
            src='/images/components/reasonChoose/row.svg'
            width={120}
            height={120}
            className='w-[0.875rem] h-[0.74975rem] md:w-[2.125rem] md:h-[2.125rem] max-md:ml-[0.51rem]'
          />
        </div>
      </Link>
    </div>
  )
}
