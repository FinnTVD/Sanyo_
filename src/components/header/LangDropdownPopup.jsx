import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

export default function LangDropdownPopup({isMobile}) {
  return (
    <div
      className={clsx(
        'absolute bottom-0 pt-2 translate-y-full opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-300 font-normal min-w-full',
        {
          'left-0': isMobile,
          'left-1/2 -translate-x-1/2': !isMobile,
        },
      )}
    >
      <ul
        className={clsx('w-max bg-grey-0 rounded-[0.375rem]', {
          'py-3 px-[1.24rem]': !isMobile,
          'py-[0.63rem] px-2': isMobile,
        })}
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        }}
      >
        <li className=''>
          <Link
            href={`/vi`}
            className={clsx(
              'flex flex-row items-center font-Iciel leading-1.5 text-grey-700',
              {
                'text-[1rem]': !isMobile,
                'text-0.75': isMobile,
              },
            )}
          >
            <Image
              src={`/images/layout/header/radio-active.svg`}
              alt='vietnam'
              className={clsx('', {
                'mr-[0.88rem] size-[0.875rem]': !isMobile,
                'mr-[0.56rem] size-[0.75rem]': isMobile,
              })}
              width={120}
              height={120}
            />
            Việt Nam
          </Link>
        </li>
        <li className='mt-[0.3rem]'>
          <Link
            href={`/en`}
            className={clsx(
              'flex flex-row items-center font-Iciel leading-1.5 text-grey-700',
              {
                'text-[1rem]': !isMobile,
                'text-0.75': isMobile,
              },
            )}
          >
            <Image
              src={`/images/layout/header/radio.svg`}
              alt='english'
              className={clsx('', {
                'mr-[0.88rem] size-[0.875rem]': !isMobile,
                'mr-[0.56rem] size-[0.75rem]': isMobile,
              })}
              width={120}
              height={120}
            />
            English
          </Link>
        </li>
      </ul>
    </div>
  )
}
