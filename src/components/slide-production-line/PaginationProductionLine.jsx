import clsx from 'clsx'
import {useSwiper} from 'swiper/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function PaginationProductionLine({activeImage, direction}) {
  const swiper = useSwiper()
  // useEffect(() => {
  //   if (swiper.slides) {
  //     const paginationContainer = document.querySelector(
  //       '.pagination-bar-container',
  //     )
  //     const bars = document.querySelectorAll('.pagination-bar')
  //     if (direction === 'right') {
  //       const bar1 = document.querySelector(
  //         `.pagination-bar-${
  //           activeImage - 1 < 0 ? swiper.slides.length - 1 : activeImage - 1
  //         }`,
  //       )
  //       const bar2 = document.querySelector(`.pagination-bar-${activeImage}`)
  //       if (bar1 && bar2) {
  //         const distanceBar =
  //           parseFloat(
  //             window.getComputedStyle(bar1).getPropertyValue('margin-right'),
  //           ) +
  //           parseFloat(
  //             window.getComputedStyle(bar2).getPropertyValue('margin-left'),
  //           )
  //         if (activeImage - 1 >= 0) {
  //           const translateBar1 = distanceBar + bar1.offsetWidth
  //           const translateBar2 = distanceBar + bar2.offsetWidth
  //           bar1.style.transform = `translateX(${
  //             decodeTranslateValue(bar1).x + translateBar1
  //           }px)`
  //           bar2.style.transform = `translateX(-${
  //             decodeTranslateValue(bar2).x + translateBar2
  //           }px)`
  //           setTimeout(() => {
  //             bars.forEach((bar, i) => {
  //               bar.style.transition = 'none'
  //               if (i !== activeImage) {
  //                 bar.style.transform = 'none'
  //                 bar.style.opacity = 0.4
  //               }
  //             })
  //             bar2.style.transform = 'none'
  //             bar2.style.opacity = 1
  //             setTimeout(() => {
  //               bars.forEach((bar, i) => {
  //                 bar.style.transition = 'all 0.7s ease-out'
  //               })
  //             }, 20)
  //           }, 700)
  //         } else {
  //           const translateBar1 =
  //             parseFloat(paginationContainer.offsetWidth) -
  //             parseFloat(bar1.offsetWidth) -
  //             distanceBar
  //           bar1.style.transform = `translateX(-${
  //             decodeTranslateValue(bar1).x + translateBar1
  //           }px)`
  //           bars.forEach((bar, i) => {
  //             const translateBar = distanceBar + bar.offsetWidth
  //             if (i !== bars.length - 1) {
  //               bar.style.transform = `translateX(${
  //                 decodeTranslateValue(bar).x + translateBar
  //               }px)`
  //             }
  //           })
  //           setTimeout(() => {
  //             bar1.style.transition = 'none'
  //             bar1.style.transform = 'none'
  //             bar1.style.opacity = 0.4
  //             bars.forEach((bar, i) => {
  //               bar.style.transition = 'none'
  //               if (i !== bars.length - 1) {
  //                 bar.style.transform = 'none'
  //                 bar.style.opacity = i === 0 ? 1 : 0.4
  //               }
  //             })
  //             setTimeout(() => {
  //               bar1.style.transition = 'all 0.7s ease-out'
  //               bars.forEach((bar, i) => {
  //                 bar.style.transition = 'all 0.7s ease-out'
  //               })
  //             }, 20)
  //           }, 700)
  //         }
  //       }
  //     } else {
  //       const bar1 = document.querySelector(`.pagination-bar-${activeImage}`)
  //       const bar2 = document.querySelector(
  //         `.pagination-bar-${activeImage + 1}`,
  //       )
  //       if (bar1 && bar2) {
  //         const distanceBar =
  //           parseFloat(
  //             window.getComputedStyle(bar1).getPropertyValue('margin-right'),
  //           ) +
  //           parseFloat(
  //             window.getComputedStyle(bar2).getPropertyValue('margin-left'),
  //           )
  //         const translateBar1 = distanceBar + bar1.offsetWidth
  //         const translateBar2 = distanceBar + bar2.offsetWidth
  //         bar1.style.transform = `translateX(${
  //           decodeTranslateValue(bar1).x + translateBar1
  //         }px)`
  //         bar2.style.transform = `translateX(-${
  //           decodeTranslateValue(bar2).x + translateBar2
  //         }px)`
  //         setTimeout(() => {
  //           bar1.style.transition = 'none'
  //           bar1.style.transform = 'none'
  //           bar1.style.opacity = 1
  //           bar2.style.transition = 'none'
  //           bar2.style.transform = 'none'
  //           bar2.style.opacity = 0.4
  //           setTimeout(() => {
  //             bar1.style.transition = 'all 0.7s ease-out'
  //             bar2.style.transition = 'all 0.7s ease-out'
  //           }, 20)
  //         }, 700)
  //       }
  //     }
  //   }
  // }, [activeImage])

  useGSAP(() => {
    if (swiper.slides) {
      const paginationContainer = document.querySelector(
        '.pagination-bar-container',
      )
      const bars = document.querySelectorAll('.pagination-bar')
      if (direction === 'right') {
        const bar1 = document.querySelector(
          `.pagination-bar-${
            activeImage - 1 < 0 ? swiper.slides.length - 1 : activeImage - 1
          }`,
        )
        const bar2 = document.querySelector(`.pagination-bar-${activeImage}`)
        if (bar1 && bar2) {
          const distanceBar =
            parseFloat(
              window.getComputedStyle(bar1).getPropertyValue('margin-right'),
            ) +
            parseFloat(
              window.getComputedStyle(bar2).getPropertyValue('margin-left'),
            )
          const tl = gsap.timeline({})
          if (activeImage - 1 >= 0) {
            const translateBar1 = distanceBar + bar1.offsetWidth
            const translateBar2 = distanceBar + bar2.offsetWidth
            tl.to(bar1, {
              x: `${translateBar1}px`,
              duration: 0.8,
            })
            tl.to(
              bar2,
              {
                x: `-${translateBar2}px`,
                duration: 0.8,
              },
              '<',
            )
            bars.forEach((bar, i) => {
              if (i !== activeImage) {
                tl.set(bar, {
                  x: 0,
                  autoAlpha: 0.4,
                })
              }
            })
            tl.set(
              bar2,
              {
                x: 0,
                autoAlpha: 1,
              },
              '<',
            )
          } else {
            const translateBar1 =
              parseFloat(paginationContainer.offsetWidth) -
              parseFloat(bar1.offsetWidth) -
              distanceBar
            tl.to(bar1, {
              x: `-${translateBar1}px`,
              duration: 0.8,
            })
            bars.forEach((bar, i) => {
              const translateBar = distanceBar + bar.offsetWidth
              if (i !== bars.length - 1) {
                tl.to(
                  bar,
                  {
                    x: `${translateBar}px`,
                    duration: 0.8,
                  },
                  '<',
                )
              }
            })
            tl.set(bar1, {
              x: 0,
              autoAlpha: 0.4,
            })
            bars.forEach((bar, i) => {
              if (i !== bars.length - 1) {
                tl.set(
                  bar,
                  {
                    x: 0,
                    autoAlpha: i === 0 ? 1 : 0.4,
                  },
                  '<',
                )
              }
            })
          }
        }
      } else {
        const bar1 = document.querySelector(`.pagination-bar-${activeImage}`)
        const bar2 = document.querySelector(
          `.pagination-bar-${activeImage + 1}`,
        )
        if (bar1 && bar2) {
          const distanceBar =
            parseFloat(
              window.getComputedStyle(bar1).getPropertyValue('margin-right'),
            ) +
            parseFloat(
              window.getComputedStyle(bar2).getPropertyValue('margin-left'),
            )
          const tl = gsap.timeline({})
          const translateBar1 = distanceBar + bar1.offsetWidth
          const translateBar2 = distanceBar + bar2.offsetWidth
          tl.to(bar1, {
            x: `${translateBar1}px`,
            duration: 0.8,
          })
          tl.to(
            bar2,
            {
              x: `-${translateBar2}px`,
              duration: 0.8,
            },
            '<',
          )
          tl.set(bar1, {
            x: 0,
            autoAlpha: 1,
          })
          tl.set(
            bar2,
            {
              x: 0,
              autoAlpha: 0.4,
            },
            '<',
          )
        }
      }
    }
  }, [activeImage])

  return (
    <ul className='pagination-bar-container absolute flex flex-row w-[92%] left-1/2 -translate-x-1/2 z-20 bottom-[5%]'>
      {Array.from({length: swiper.slides.length}, (_, i) => i + 1).map(
        (_, i) => {
          return (
            <li
              key={`pagination-bar-${i}`}
              className={clsx(
                `pagination-bar pagination-bar-${i} grow rounded-none bg-grey-0 h-[0.125rem] md:h-[0.25rem] mx-1 md:mx-3 transition-all duration-700`,
                {'opacity-40': i > 0},
              )}
            />
          )
        },
      )}
    </ul>
  )
}
