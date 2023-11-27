import { Metadata } from 'next'
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

export default function HomePage() {
  return (
    <>
      <Header>
        <HeroSection />
      </Header>
      <Main>
        <ProjectsSection />
        <ParallaxImage imageUrl={BgImgTeck.src}>
          <TeckStackSection />
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
