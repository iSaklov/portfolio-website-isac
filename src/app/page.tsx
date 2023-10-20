import { Metadata } from 'next'
import Header from '../components/layout/Header'
import Main from '@/components/layout/Main'
import ProjectsSection from '@/components/ProjectsSection'
import TeckStackSection from '@/components/TeckStackSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}
