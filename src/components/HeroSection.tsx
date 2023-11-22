import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import ArrowDown from '@/assets/images/icons/ep_arrow-down.svg'

export default function HeroSection() {
  return (
    <div className='container mx-auto max-w-2xl px-4 md:px-6 lg:max-w-7xl lg:px-8 '>
      <div className='flex items-center justify-center py-5 md:hidden'>
        <Link href='/'>
          <Image src={Logo} alt='iSac Development logo' className='h-20 w-20' />
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center py-10 text-2xl font-extralight tracking-wide md:pt-[285px] md:text-3xl'>
        <h1 className='py-2 text-center'>
          Aventures numériques – <br className='md:hidden' /> projets en ligne
        </h1>
        <Link href='/#projects'>
          <Image src={ArrowDown} alt='' className='h-8 w-8' />
        </Link>
      </div>
    </div>
  )
}
