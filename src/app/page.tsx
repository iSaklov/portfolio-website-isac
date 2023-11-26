import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TeckStackSection from '@/components/TeckStackSection'
import AboutSection from '@/components/AboutSection'
import ContactsSection from '@/components/ContactsSection'
import ParallaxImage from '@/components/layout/ParallaxImage'
import BgImg01 from '@/assets/images/background/jeff-sheldon-9dI3g8owHiI-unsplash.jpg'
import BgImg02 from '@/assets/images/background/patrick-lindenberg-1iVKwElWrPA-unsplash.jpg'
import BgImg03 from '@/assets/images/background/jeshoots-com-pUAM5hPaCRI-unsplash.jpg'

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
        <ParallaxImage imageUrl={BgImg01.src}>
          <TeckStackSection />
        </ParallaxImage>
        <ParallaxImage imageUrl={BgImg02.src}>
          <AboutSection />
        </ParallaxImage>
        <ParallaxImage imageUrl={BgImg03.src}>
          <ContactsSection />
        </ParallaxImage>
      </Main>
    </>
  )
}
