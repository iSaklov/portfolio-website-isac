import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import TeckStackSection from '@/components/TeckStackSection'
import AboutSection from '@/components/AboutSection'

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
        <section id='contacts' className='min-h-screen w-screen bg-subtle-blue'>
          <h2 className='pt-10 text-center font-serif text-3xl text-white'>
            Contacts.
          </h2>
        </section>
      </Main>
    </>
  )
}
