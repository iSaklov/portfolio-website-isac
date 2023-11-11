import Image from 'next/image'
import Section from './layout/Section'
import LinkedinIcon from '@/assets/images/icons/ri_linkedin-line.svg'
import GithubIcon from '@/assets/images/icons/akar-icons_github-fill.svg'
import TelegramIcon from '@/assets/images/icons/iconoir_telegram.svg'

export default async function ContactsSection() {
  const idSection = 'contacts'
  const title = 'Contacts'

  return (
    <Section id={idSection} title={title}>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='col-span-full'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Saisissez votre nom
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Saisissez votre e-mail
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='tel'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Saisissez votre numéro de téléphone
                </label>
                <div className='mt-2'>
                  <input
                    type='tel'
                    name='tel'
                    id='tel'
                    autoComplete='tel'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </div>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Écrivez votre message
                </label>
                <div className='mt-2'>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-between gap-x-6'>
          <div className='flex items-center'>
            <span className='mr-16 block'>info@monsite.fr</span>
            <div className='flex items-center gap-x-4'>
              <a
                href='https://www.linkedin.com/in/oleg-smaliakou/'
                target='_blank'
                rel='noopener'
              >
                <Image src={LinkedinIcon} alt='' className='inline-block' />
              </a>
              <a
                href='https://github.com/iSaklov'
                target='_blank'
                rel='noopener'
              >
                <Image src={GithubIcon} alt='' className='inline-block' />
              </a>
              <a href='https://t.me/iSaklov' target='_blank' rel='noopener'>
                <Image src={TelegramIcon} alt='' className='inline-block' />
              </a>
            </div>
          </div>
          <div>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </Section>
  )
}
