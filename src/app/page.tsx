import { Metadata } from 'next'
import Header from '../components/layout/Header'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Home() {
  return (
    <>
      <Header />
      <section id='projects' className='min-h-screen w-screen bg-low-result-bg'>
        <h2 className='pt-10 text-center font-serif text-3xl text-white'>
          Projects.
        </h2>
      </section>
      <section
        id='tech-stack'
        className='min-h-screen w-screen bg-medium-result-bg'
      >
        <h2 className='pt-10 text-center font-serif text-3xl text-white'>
          Teck stack.
        </h2>
      </section>
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
      <footer className='min-h-screen w-screen bg-white'>
        <h2 className='pt-10 text-center font-serif text-3xl text-primary-dark'>
          Contacts.
        </h2>
      </footer>
    </>
  )
}
