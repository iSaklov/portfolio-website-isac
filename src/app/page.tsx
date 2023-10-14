import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Home() {
  return (
    <>
      <header className='min-h-screen w-screen bg-white'>
        
      </header>
      <section id='projects' className='min-h-screen w-screen bg-low-result-bg'>
        <h1>Projects.</h1>
      </section>
      <section
        id='tech-stack'
        className='min-h-screen w-screen bg-medium-result-bg'
      >
        <h1>Teck stack.</h1>
      </section>
      <section id='about' className='min-h-screen w-screen bg-high-result-bg'>
        <h1>A propos.</h1>
      </section>
      <section id='contacts' className='min-h-screen w-screen bg-subtle-blue'>
        <h1>Contacts.</h1>
      </section>
      <footer className='min-h-screen w-screen bg-white'></footer>
    </>
  )
}
