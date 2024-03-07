import { Metadata } from 'next'
import { getRecords } from '@/database/getRecords'
import { projectRecordType, techRecordType } from '@/database/airtable'
import { getDeviceType } from '@/utils/deviceDetect'
import { getPlaceholderImageProps } from '@/utils/getPlaceholderImageProps'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TeckStackSection from '@/components/TeckStackSection'
import AboutSection from '@/components/AboutSection'
import ContactsSection from '@/components/ContactsSection'
import ParallaxImage from '@/components/layout/ParallaxImage'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default async function HomePage() {
  const initialProjectsData = await getRecords(projectRecordType, {
    maxRecords: 4
  })
  const initialTechsData = await getRecords(techRecordType, {
    sort: [{ field: 'Name', direction: 'asc' }]
  })
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
        <ParallaxImage
          image={await getPlaceholderImageProps(
            'assets/images/background/jeff-sheldon-9dI3g8owHiI-unsplash.jpg'
          )}
        >
          <TeckStackSection techs={initialTechsData} />
        </ParallaxImage>
        <ParallaxImage
          image={await getPlaceholderImageProps(
            'assets/images/background/patrick-lindenberg-1iVKwElWrPA-unsplash.jpg'
          )}
        >
          <AboutSection />
        </ParallaxImage>
        <ParallaxImage
          image={await getPlaceholderImageProps(
            'assets/images/background/jeshoots-com-pUAM5hPaCRI-unsplash.jpg'
          )}
        >
          <ContactsSection />
        </ParallaxImage>
      </Main>
    </>
  )
}
