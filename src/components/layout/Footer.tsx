import Link from 'next/link'
import Image from 'next/image'
import BgImg from '../../assets/images/background/laura-ockel-qOx9KsvpqcM-unsplash.jpg'
import Logo from '@/assets/images/logo.svg'

export default function Footer() {
  return (
    <footer
      className='bg-cover bg-center'
      style={{ backgroundImage: `url(${BgImg.src})` }}
    >
      <div className='container mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-4 py-10 text-white'>
        <ul className='flex w-full flex-col text-left sm:flex-row sm:justify-between sm:text-center'>
          <li className='__poppins_reg_middle px-2'>Mentions légales</li>
          <li className='__poppins_reg_middle px-2'>
            Politique en matière de cookies
          </li>
          <li className='__poppins_reg_middle px-2'>
            Politique de confidentialité
          </li>
          <li className='__poppins_reg_middle px-2'>
            Conditions d’utilisation
          </li>
        </ul>
        <p className='__poppins_reg_middle text-center'>
          © 2023 par iSaklov. Créé avec l’amour et Next.js
        </p>
        <Link href='/'>
          <Image src={Logo} alt='iSac Development' className='h-[90] w-auto' />
        </Link>
        <p className='__poppins_reg_middle text-center'>Tous droits réservés</p>
      </div>
    </footer>
  )
}
