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
                    pattern='(?:[A-Za-z]{2,}\s*)+'
                    className='__poppins_thin_extralow peer block h-12 w-full border-0 py-1.5 shadow-sm ring-1 ring-inset ring-primary-dark-translucent  placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange'
                  />
                  <span className='__poppins_thin_extralow invisible absolute -bottom-6 text-accent-orange peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible'>
                    Veuillez saisir un nom valide
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
                    Veuillez saisir une adresse e-mail valide
                  </span>
                </div>
              </div>
              <div className='col-span-full'>
                <label htmlFor='tel' className='__poppins_extrali_high block'>
                  Saisissez votre numéro de téléphone
                </label>
                <div className='__poppins_thin_extralow relative mt-2'>
                  <input
                    id='tel'
                    name='tel'
                    type='tel'
                    autoComplete='tel'
                    placeholder='33602030405'
                    pattern='[0-9]{11,}'
                    // value={"this.value=this.value.replace(/[^0-9+]/g,'')"}
                    className={`peer block h-12 w-full border-0 py-1.5 pl-6 shadow-sm ring-1 ring-inset ring-primary-dark-translucent  placeholder:-translate-y-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:focus:translate-y-0 sm:text-sm sm:leading-6 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-pale-pink invalid:[&:not(:placeholder-shown):not(:focus)]:ring-accent-orange`}
                  />
                  <span
                    className={`absolute pl-3 before:absolute before:-translate-y-12 before:content-['+'] peer-[&:focus]:before:-translate-y-9 peer-[&:not(:placeholder-shown):not(:focus)]:before:-translate-y-9`}
                  />
                  <span
                    className={`__poppins_thin_extralow invisible absolute -bottom-6 text-accent-orange peer-[&:not(:placeholder-shown):not(:focus):invalid]:visible`}
                  >
                    Veuillez saisir un numéro de téléphone au format
                    international, par exemple en composant le code{' '}
                    <span>+33</span>
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
        <div className='mt-6 flex flex-col items-center justify-between gap-y-5 md:flex-row md:gap-x-12 lg:gap-x-32'>
          <div className='order-1 flex flex-col items-center justify-center gap-y-5 md:order-none md:flex-1 md:flex-row md:justify-between'>
            <span className='__poppins_extrali_high block lg:mr-16'>
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
          <Button
            type='submit'
            variant='primary'
            className='group-invalid:pointer-events-none group-invalid:opacity-75'
          >
            Envoyer
          </Button>
        </div>
      </form>
    </Section>
  )
}
