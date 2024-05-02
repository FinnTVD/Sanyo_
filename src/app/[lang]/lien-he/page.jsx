import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import LienHeSection from '@/sections/lien-he/LienHeSection'
import './styles.css'
import getData from '@/lib/getData'

let pageId
async function getLienHe(pageId) {
  return getData(`/pages/${pageId}/contact`)
}

export default async function LienHePage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const {lang} = params
  if (lang === 'vi') {
    pageId = 324
  } else {
    pageId = 328
  }
  const [dataContact] = await Promise.all([getLienHe(pageId)])
  return (
    <main>
      <BreadcrumbContainer className='md:ml-[3.75rem] ml-3'>
        <BreadcrumbLink href={`/`}>
          {lang === 'vi' ? 'TRANG CHỦ' : 'HOME'}
        </BreadcrumbLink>
        <BreadcrumbLink isLastLink>
          {lang === 'vi' ? 'LIÊN HỆ' : 'CONTACT'}
        </BreadcrumbLink>
      </BreadcrumbContainer>
      <LienHeSection
        isMobile={isMobile}
        lang={lang}
        data={dataContact.contact}
      />
    </main>
  )
}
