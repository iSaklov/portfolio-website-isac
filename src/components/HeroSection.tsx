import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import ArrowDown from '@/assets/images/icons/ep_arrow-down.svg'

export default function HeroSection() {
  return (
    <div>
      <div className='container mx-auto flex max-w-7xl items-center justify-center pt-5 sm:hidden'>
        <Link href='/'>
          <Image src={Logo} alt='iSac Development' className='h-full w-full' />
        </Link>
      </div>
      <div className='container mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-10 text-2xl font-extralight sm:pt-[285px] sm:text-3xl'>
        <h1 className='py-2 text-center'>
          Aventures numériques – projets en ligne
        </h1>
        <Link href='/#projects'>
          <Image src={ArrowDown} alt='' className='h-8 w-8' />
        </Link>
      </div>
    </div>
  )
}
