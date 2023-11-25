import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import ArrowDown from '@/assets/images/icons/ep_arrow-down.svg'
import Mask from '@/assets/images/mask.svg'
import BgImg from '@/assets/images/background/api-512d36c09662682717108a38bbb5c57d.gif'

export default function HeroSection() {
  return (
    <div
      className='relative h-[90vh] bg-cover bg-fixed bg-center'
      style={{ backgroundImage: `url(${BgImg.src})` }}
    >
      <div
        className='absolute inset-0 h-full w-full bg-fixed'
        style={{ backgroundImage: `url(${Mask.src})` }}
      />
      <div className='container mx-auto max-w-2xl px-4 md:px-6 lg:max-w-7xl lg:px-8'>
        <div className='relative flex items-center justify-center py-5 md:hidden'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='iSac Development logo'
              className='h-20 w-20'
            />
          </Link>
        </div>
        <Link
          href='/#projects'
          className='flex animate-pulse flex-col items-center justify-center py-10'
        >
          <h1 className='text-center text-2xl font-extralight tracking-wide text-white transition-colors md:pt-[285px] md:text-3xl'>
            Aventures numériques – <br className='md:hidden' /> projets en ligne
          </h1>
          <Image
            src={ArrowDown}
            alt=''
            className='mt-2 h-8 w-8 animate-bounce invert'
          />
        </Link>
      </div>
    </div>
  )
}
