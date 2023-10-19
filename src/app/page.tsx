import { Metadata } from 'next'
import Header from '../components/layout/Header'
import Main from '@/components/layout/Main'
import TeckStackSection from '@/components/TeckStackSection'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <section
          id='projects'
          className='min-h-screen w-screen bg-low-result-bg'
        >
          <h2 className='pt-10 text-center font-serif text-3xl text-white'>
            Projects.
          </h2>
        </section>
        <TeckStackSection />
        <section id='about' className='min-h-screen w-screen bg-high-result-bg'>
          <h2 className='pt-10 text-center font-serif text-3xl text-white'>
            A propos.
          </h2>
        </section>
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
