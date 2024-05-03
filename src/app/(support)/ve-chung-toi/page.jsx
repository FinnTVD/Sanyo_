import getData from '@/lib/getData'
import './styles.css'
import SlideOnlyImagesDownload from '@/components/slideOnlyImagesWithDowload'
import BreadcrumbContainer from '@/components/breadcrumb/BreadcrumbContainer'
import BreadcrumbLink from '@/components/breadcrumb/BreadcrumbLink'
import LeaderShipMessageAndCoreValues from '@/sections/about-us/LeaderShipMessageAndCoreValues'
import Achieved from '@/sections/about-us/Achieved'
import ProductionLineSection from '@/sections/about-us/ProductionLineSection'
import PartnerSection from '@/components/partner/PartnerSection'

async function getLeadershipMessage(pageId) {
  return getData(`/pages/${pageId}/leadershipMessage`)
}
async function getGreatExperience(pageId) {
  return getData(`/pages/${pageId}/greatExperience`)
}
async function getCoreValues(pageId) {
  return getData(`/pages/${pageId}/coreValues`)
}
async function getAchieved(pageId) {
  return getData(`/pages/${pageId}/achieved`)
}
async function getService(pageId) {
  return getData(`/pages/${pageId}/service`)
}
async function getPartnerEn() {
  return getData(`/options/options/partnerEn`)
}
async function getPartnerVi() {
  return getData(`/options/options/partnerVi`)
}
const pageId = 188

export default async function AboutUsPage({params, searchParams}) {
  const {viewport} = searchParams
  const isMobile = viewport.includes('mobile')
  const [
    dataGreatExperience,
    dataLeadershipMessage,
    dataCoreValues,
    dataAchieved,
    dataService,
    dataPartner,
  ] = await Promise.all([
    getGreatExperience(pageId),
    getLeadershipMessage(pageId),
    getCoreValues(pageId),
    getAchieved(pageId),
    getService(pageId),
    getPartnerVi(),
  ])
  return (
    <main>
      <BreadcrumbContainer className='ml-3 md:mx-[6.25rem]'>
        <BreadcrumbLink href={`/`}>TRANG CHỦ</BreadcrumbLink>
        <BreadcrumbLink isLastLink>VỀ CHÚNG TÔI</BreadcrumbLink>
      </BreadcrumbContainer>
      <SlideOnlyImagesDownload data={dataGreatExperience.greatExperience} />
      <LeaderShipMessageAndCoreValues
        isMobile={isMobile}
        dataLeadershipMessage={dataLeadershipMessage.leadershipMessage}
        dataCoreValues={dataCoreValues.coreValues}
      />
      <Achieved
        isMobile={isMobile}
        data={dataAchieved.achieved}
      />
      <ProductionLineSection
        isMobile={isMobile}
        data={dataService.service}
      />
      <PartnerSection
        isMobile={isMobile}
        data={dataPartner.partnerVi}
      />
    </main>
  )
}