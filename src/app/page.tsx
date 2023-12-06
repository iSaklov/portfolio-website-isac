import { Metadata } from 'next'
import { getRecords } from '@/database/getRecords'
import { projectRecordType, techRecordType } from '@/database/airtable'
import { getDeviceType } from '@/utils/deviceDetect'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TeckStackSection from '@/components/TeckStackSection'
import AboutSection from '@/components/AboutSection'
import ContactsSection from '@/components/ContactsSection'
import ParallaxImage from '@/components/layout/ParallaxImage'
// bachground images for parallax effect
import BgImgTeck from '@/assets/images/background/jeff-sheldon-9dI3g8owHiI-unsplash.jpg'
import BgImgAbout from '@/assets/images/background/patrick-lindenberg-1iVKwElWrPA-unsplash.jpg'
import BgImgContacts from '@/assets/images/background/jeshoots-com-pUAM5hPaCRI-unsplash.jpg'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default async function HomePage() {
  const initialProjectsData = await getRecords(projectRecordType)
  const initialTechsData = await getRecords(techRecordType)
  const deviceType = getDeviceType()

  return (
    <>
      <Header>
        <HeroSection />
      </Header>
      <Main>
        <ProjectsSection
          projects={initialProjectsData}
          techs={initialTechsData}
          deviceType={deviceType}
        />
        <ParallaxImage imageUrl={BgImgTeck.src}>
          <TeckStackSection techs={initialTechsData} />
        </ParallaxImage>
        <ParallaxImage imageUrl={BgImgAbout.src}>
          <AboutSection />
        </ParallaxImage>
        <ParallaxImage imageUrl={BgImgContacts.src}>
          <ContactsSection />
        </ParallaxImage>
      </Main>
    </>
  )
}
