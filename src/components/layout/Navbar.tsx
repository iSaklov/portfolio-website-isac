'use client'

import { Fragment, useState, useEffect, useRef } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '@/utils/classNames'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import LogoWhite from '@/assets/images/logo-white.svg'

const navigation = [
  { name: 'Projects.', href: { pathname: '/', hash: 'projects' } },
  { name: 'Tech stack.', href: { pathname: '/', hash: 'tech-stack' } },
  { name: 'À propos.', href: { pathname: '/', hash: 'about' } },
  { name: 'Contacts.', href: { pathname: '/', hash: 'contacts' } }
]

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const scrollYRef = useRef(0)

  useEffect(() => {
    const targetElement = document.querySelector('.__nav')

    if (!targetElement) {
      return
    }

    // Using data attributes

    // The handleMenuStateChange function is responsible for checking the value of the data-headlessui-state attribute on the targetElement.
    // In this case, it checks if the value is 'open'. This attribute is set by the headless UI library to indicate the current state of the component.

    const handleMenuStateChange = () => {
      const isOpen =
        targetElement.getAttribute('data-headlessui-state') === 'open'

      // Set the state variable isMenuOpen based on the value of the data-headlessui-state attribute.
      setIsMenuOpen(isOpen)
    }

    const observer = new MutationObserver(handleMenuStateChange)

    observer.observe(targetElement, {
      attributes: true,
      attributeFilter: ['data-headlessui-state']
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    function handleScroll() {
      const currentScrollY = window.scrollY
      let currentSectionId = ''

      sections.forEach((section) => {
        const isMobileView = !window.matchMedia('(min-width: 768px)').matches
        const sectionRect = section.getBoundingClientRect()
        const windowHeight = window.innerHeight
        let topCondition
        let bottomCondition

        if (isMobileView) {
          // These values are optimized to ensure a smooth transition of the mobile menu button color during scrolling
          topCondition = sectionRect.top < 20
          bottomCondition = sectionRect.bottom > -160
        } else {
          // Used to hide the navbar when scrolling down on devices with a width of md and larger
          if (currentScrollY > scrollYRef.current) {
            setIsScrollingDown(true)
          } else {
            setIsScrollingDown(false)
          }
          // Check if the top boundary of the section is above the middle of the visible area
          topCondition = sectionRect.top < windowHeight / 2
          // Check if the bottom boundary of the section is below the middle of the visible area
          bottomCondition = sectionRect.bottom > windowHeight / 2
        }

        if (topCondition && bottomCondition) {
          currentSectionId = section.id
        }
      })

      setCurrentSection(currentSectionId)
      scrollYRef.current = currentScrollY
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Disclosure
      as='nav'
      className={classNames(
        '__nav fixed z-30 w-full md:bg-white md:transition-transform md:delay-150 md:duration-300',
        isScrollingDown
          ? 'md:translate-y-[-100%] md:ease-out'
          : 'md:translate-y-0 md:ease-in'
      )}
    >
      {({ open }) => (
        <>
          <div className='container mx-auto flex max-w-7xl items-center justify-center px-4'>
            <div className='absolute right-2 top-2 flex items-center md:hidden'>
              {/* Mobile menu button*/}
              <Disclosure.Button
                className={classNames(
                  'relative z-50 inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset',
                  currentSection && !open
                    ? 'focus:ring-primary-dark'
                    : 'focus:ring-white'
                )}
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Ouvrir le menu principal</span>
                {open ? (
                  <XMarkIcon
                    className='block h-10 w-10 text-white'
                    aria-hidden='true'
                  />
                ) : (
                  <Bars3Icon
                    className={classNames(
                      'block h-10 w-10 transition duration-300',
                      currentSection ? 'text-primary-dark' : 'text-white'
                    )}
                    aria-hidden='true'
                  />
                )}
              </Disclosure.Button>
            </div>
            <div className='hidden w-full flex-col items-center justify-center gap-5 px-2 py-5 md:flex'>
              {/* Logo */}
              <Link href='/'>
                <Image
                  src={Logo}
                  alt='iSac Development'
                  className='h-[90px] w-auto'
                />
              </Link>
              {/* Navigation Links */}
              <ul className='flex w-full justify-evenly'>
                {navigation.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={classNames(
                        href.hash === currentSection
                          ? 'pointer-events-none bg-primary-dark text-white'
                          : 'text-primary-dark hover:text-accent-orange',
                        'inline-block rounded-md px-2 py-0 font-serif text-3xl lowercase leading-[3rem] tracking-tight transition-colors lg:px-3 lg:text-4xl lg:leading-[3.5rem]'
                      )}
                      aria-current={
                        href.hash === currentSection ? 'page' : undefined
                      }
                    >
                      {name}
                    </Link>
                  </li>
                ))}
                {/* etc. dropdown */}
                <li className='group relative'>
                  <span className='block px-2 py-0 font-serif text-3xl lowercase leading-[3rem] tracking-tight text-primary-dark transition-colors group-hover:text-accent-orange lg:px-3 lg:text-4xl lg:leading-[3.5rem]'>
                    <span className='absolute -inset-2' />
                    <span className='sr-only'>Ouvrir lien etc.</span>
                    Etc.
                  </span>
                  <div className='invisible scale-95 transform opacity-0 transition duration-75 ease-in group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-hover:duration-100 group-hover:ease-out'>
                    <ul className='absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:w-60'>
                      <li>
                        <a
                          href='/docs/CV.pdf'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='block px-4 py-2 text-xl font-extralight leading-snug text-primary-dark hover:bg-gray-100 lg:text-2xl'
                        >
                          Voir mon CV
                        </a>
                      </li>
                      <li>
                        <a
                          href='/docs/CV.pdf'
                          download='CV_iSac_full_stack_developer.pdf'
                          className='block px-4 py-2 text-xl font-extralight leading-snug text-primary-dark hover:bg-gray-100 lg:text-2xl'
                        >
                          Télécharger mon CV
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Transition>
            <Disclosure.Panel className='h-screen w-screen md:hidden'>
              <Transition.Child
                enter='transition-opacity ease-linear duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity ease-linear duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Disclosure.Button
                  as='div'
                  className='absolute inset-0 h-full w-full bg-primary-dark-translucent'
                >
                  {/* Dimming the main content when the menu is open and closing the menu when clicking on an accessible area */}
                </Disclosure.Button>
              </Transition.Child>
              <Transition.Child
                enter='transition-transform duration-300 ease-in-out'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transition-transform duration-300 ease-in-out'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
                className='ml-auto h-full w-4/5'
              >
                <div className='absolute inset-y-0 right-0 z-40 flex h-full w-full min-w-[320px] flex-col items-center gap-14 bg-primary-dark py-14'>
                  <Link href='/'>
                    <Disclosure.Button>
                      <Image
                        src={LogoWhite}
                        alt='iSac Development'
                        className='h-[90px] w-auto'
                      />
                    </Disclosure.Button>
                  </Link>
                  <ul className='flex h-full flex-col justify-center space-y-8 pb-24 text-center'>
                    {navigation.map(({ name, href }) => (
                      <li key={name}>
                        <Link
                          href={href}
                          className={classNames(
                            href.hash === currentSection
                              ? 'pointer-events-none bg-light-gray text-primary-dark'
                              : 'bg-transparent text-white',
                            'inline-block rounded-md px-2 py-0 font-serif text-[1.625rem] leading-[3rem] tracking-tight'
                          )}
                          aria-current={
                            href.hash === currentSection ? 'page' : undefined
                          }
                        >
                          <Disclosure.Button className='lowercase'>
                            {name}
                          </Disclosure.Button>
                        </Link>
                      </li>
                    ))}
                    {/* etc. dropdown */}
                    <Menu as='div' className='relative'>
                      <Menu.Button className='px-2 py-0 font-serif text-[1.625rem] lowercase leading-[3rem] tracking-tight text-white'>
                        <span className='absolute -inset-1.5' />
                        <span className='sr-only'>Ouvrir lien etc.</span>
                        Etc.
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            <a
                              href='/docs/CV.pdf'
                              target='_blank'
                              rel='noopener noreferrer'
                              className='block bg-gray-100 px-4 py-2 text-left text-xl font-extralight leading-snug text-primary-dark'
                            >
                              Voir mon CV
                            </a>
                          </Menu.Item>
                          <Menu.Item>
                            <a
                              href='/docs/CV.pdf'
                              download='CV_iSac_full_stack_developer.pdf'
                              className='block bg-gray-100 px-4 py-2 text-left text-xl font-extralight leading-snug text-primary-dark'
                            >
                              Télécharger mon CV
                            </a>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </ul>
                </div>
              </Transition.Child>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
