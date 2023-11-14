import Image from 'next/image'
import Section from '@/components/layout/Section'
import Button from '@/components/common/Button'
import LinkedinIcon from '@/assets/images/icons/ri_linkedin-line.svg'
import GithubIcon from '@/assets/images/icons/akar-icons_github-fill.svg'
import TelegramIcon from '@/assets/images/icons/iconoir_telegram.svg'

{
  /* https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d */
}

export default async function ContactsSection() {
  const idSection = 'contacts'
  const title = 'Contacts'

  // async function onSubmit(formData: FormData) {
  //   'use server'
  //   // realisation of sending data to the server
  // }

  return (
    <Section id={idSection} title={title}>
      {/* <form action={onSubmit}> */}
      <form className='group mx-auto lg:max-w-3xl' noValidate>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-10 grid grid-cols-1 gap-y-9 sm:grid-cols-6'>
              <div className='col-span-full'>
                <label
                  htmlFor='name'
                  className={`__poppins_extrali_high block after:ml-1.5 after:text-accent-orange after:content-['*']`}
                >
                  Saisissez votre nom
                </label>
                <div className='relative mt-2'>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    autoComplete='name'
                    placeholder='Jacques Cousteau'
                    required
                    pattern='[A-Za-z\\s]{2,}'
                    className='__poppins_thin_extralow peer block h-12 w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary-dark-translucent  placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange'
                  />
                  <span className='__poppins_thin_extralow invisible absolute -bottom-6 text-accent-orange peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible'>
                    Please enter a valid name
                  </span>
                </div>
              </div>
              <div className='col-span-full'>
                <label
                  htmlFor='email'
                  className={`__poppins_extrali_high block after:ml-1.5 after:text-accent-orange after:content-['*']`}
                >
                  Saisissez votre e-mail
                </label>
                <div className='relative mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    placeholder='yves@mail.com'
                    required
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                    className='__poppins_thin_extralow peer block h-12 w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary-dark-translucent  placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange'
                  />
                  <span className='__poppins_thin_extralow invisible absolute -bottom-6 text-accent-orange peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible'>
                    Please enter a valid email address
                  </span>
                </div>
              </div>
              <div className='col-span-full'>
                <label htmlFor='tel' className='__poppins_extrali_high block'>
                  Saisissez votre numéro de téléphone
                </label>
                <div className='__poppins_thin_extralow group/tel relative mt-2'>
                  {/* <span
                    className={`before:absolute before:pl-3 before:pt-px before:content-['+'] group-focus/tel:before:pt-3.5 sm:text-sm `}
                  /> */}
                  {/* <input
                    id='tel'
                    name='tel'
                    type='tel'
                    autoComplete='tel'
                    placeholder='33602030405'
                    pattern='[+][0-9]{11,}'
                    className={`peer block h-12 w-full border-0 py-1.5 pl-6 shadow-sm ring-1 ring-inset ring-primary-dark-translucent  placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange`}
                  /> */}

                  <input
                    id='tel'
                    name='tel'
                    type='tel'
                    autoComplete='tel'
                    placeholder='33602030405'
                    pattern='[+][0-9]{11,}'
                    className={`peer block h-12 w-full border-0 py-1.5 pl-6 shadow-sm ring-1 ring-inset ring-primary-dark-translucent  placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange`}
                  />
                  <span
                    className={`pl-3 before:absolute before:-translate-y-12 before:pt-px before:content-['+'] peer-[&:not(:placeholder-shown):not(:focus)]:before:-translate-y-10`}
                  />
                  <span
                    className={`__poppins_thin_extralow invisible absolute -bottom-6 text-accent-orange peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible`}
                  >
                    Please enter a phone number
                  </span>
                </div>
              </div>
              <div className='col-span-full'>
                <label
                  htmlFor='message'
                  className={`__poppins_extrali_high block after:ml-1.5 after:text-accent-orange after:content-['*']`}
                >
                  Écrivez votre message
                </label>
                <div className='relative mt-2'>
                  <textarea
                    id='message'
                    name='message'
                    autoComplete='off'
                    placeholder='Commencez à taper votre message ici...'
                    required
                    minLength={20}
                    wrap='hard'
                    spellCheck
                    className='__poppins_thin_extralow peer block h-60 w-full resize-none border-0 py-3 shadow-sm ring-1 ring-inset ring-primary-dark-translucent placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange'
                    defaultValue={''}
                  />
                  <span className='__poppins_thin_extralow invisible absolute -bottom-6 text-accent-orange peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible'>
                    Votre message doit contenir au moins 20 caractères
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-between gap-x-6'>
          <div className='flex items-center'>
            <span className='__poppins_extrali_high mr-16 block'>
              info@monsite.fr
            </span>
            <div className='flex items-center gap-x-4'>
              <a
                href='https://www.linkedin.com/in/oleg-smaliakou/'
                target='_blank'
                rel='noopener'
              >
                <Image src={LinkedinIcon} alt='' width={32} height={32} />
              </a>
              <a
                href='https://github.com/iSaklov'
                target='_blank'
                rel='noopener'
              >
                <Image src={GithubIcon} alt='' width={32} height={32} />
              </a>
              <a href='https://t.me/iSaklov' target='_blank' rel='noopener'>
                <Image src={TelegramIcon} alt='' width={32} height={32} />
              </a>
            </div>
          </div>
          <div>
            <Button
              type='submit'
              variant='primary'
              className='group-invalid:pointer-events-none group-invalid:opacity-75'
            >
              Envoyer
            </Button>
          </div>
        </div>
      </form>
    </Section>
  )
}
