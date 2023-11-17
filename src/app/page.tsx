import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TeckStackSection from '@/components/TeckStackSection'
import AboutSection from '@/components/AboutSection'
import ContactsSection from '@/components/ContactsSection'

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
        <TeckStackSection />
        <AboutSection />
        <ContactsSection />
      </Main>
    </>
  )
}
