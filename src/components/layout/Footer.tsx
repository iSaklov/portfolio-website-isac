import Link from 'next/link'
import Image from 'next/image'
import BgImg from '@/assets/images/background/laura-ockel-qOx9KsvpqcM-unsplash.jpg'
import Logo from '@/assets/images/logo.svg'

export default function Footer() {
  return (
    <footer
      className='bg-cover bg-center'
      style={{ backgroundImage: `url(${BgImg.src})` }}
    >
      <div className='container mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-10 px-4 py-10 text-white md:px-6 lg:max-w-7xl lg:gap-y-16 lg:px-8 lg:py-20'>
        <ul className='flex w-full flex-col text-left md:flex-row md:justify-between md:text-center'>
          <li className='p-2 text-[0.9375rem] font-medium md:text-base lg:text-lg lg:underline lg:underline-offset-4 lg:transition lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:no-underline'>
            Mentions légales
          </li>
          <li className='p-2 text-[0.9375rem] font-medium md:text-base lg:text-lg lg:underline lg:underline-offset-4 lg:transition lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:no-underline'>
            Politique en matière de cookies
          </li>
          <li className='p-2 text-[0.9375rem] font-medium md:text-base lg:text-lg lg:underline lg:underline-offset-4 lg:transition lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:no-underline'>
            Politique de confidentialité
          </li>
          <li className='p-2 text-[0.9375rem] font-medium md:text-base lg:text-lg lg:underline lg:underline-offset-4 lg:transition lg:hover:scale-105 lg:hover:cursor-pointer lg:hover:no-underline'>
            Conditions d’utilisation
          </li>
        </ul>
        <p className='text-[0.9375rem] md:text-base lg:text-lg'>
          © 2023 par iSaklov. Créé avec l’amour et Next.js
        </p>
        <Link href='/'>
          <Image src={Logo} alt='iSac Development' className='h-[90] w-auto' />
        </Link>
        <p className='text-[0.9375rem] md:text-base lg:text-lg'>
          Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
