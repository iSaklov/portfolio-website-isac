'use client'

import { Fragment, useState, useEffect, useRef } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { classNames } from '@/utils/class-names'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import LogoWhite from '@/assets/images/logo-white.svg'

const navigation = [
  { name: 'Projects.', href: { pathname: '/', hash: 'projects' } },
  { name: 'Tech stack.', href: { pathname: '/', hash: 'tech-stack' } },
  { name: 'À propos.', href: { pathname: '/', hash: 'about' } },
  { name: 'Contacts.', href: { pathname: '/', hash: 'contacts' } },
  { name: 'Etc.', href: { pathname: '/', hash: '#' } }
]

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const scrollYRef = useRef(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    const sections = document.querySelectorAll('section')
    let currentSectionValue = ''

    if (window.matchMedia('(min-width: 768px)').matches) {
      if (currentScrollY > scrollYRef.current) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }
    }

    sections.forEach((section) => {
      const top = section.offsetTop - 30
      const bottom = top + section.clientHeight + 120
      // These values are optimized to ensure a smooth transition of the mobile menu button color during scrolling.
      // The top buffer zone (-30) helps trigger the color change when the section's top border approaches the top of the screen.
      // The bottom buffer zone (+120) helps maintain the color change when the section's bottom border approaches the bottom of the screen, creating a visually pleasing and smooth scrolling effect.
      if (currentScrollY > top && currentScrollY < bottom) {
        currentSectionValue = section.id
      }
    })

    setCurrentSection(currentSectionValue)
    scrollYRef.current = currentScrollY
  }

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
              <div className='flex w-full justify-evenly'>
                {navigation.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className={classNames(
                      href.hash === currentSection
                        ? 'pointer-events-none bg-primary-dark text-white'
                        : 'text-primary-dark hover:text-accent-orange',
                      'rounded-md px-2 py-0 font-serif text-3xl lowercase leading-[3rem] tracking-tight transition-colors lg:px-3 lg:text-4xl lg:leading-[3.5rem]'
                    )}
                    aria-current={
                      href.hash === currentSection ? 'page' : undefined
                    }
                  >
                    {name}
                  </Link>
                ))}
              </div>
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
                  <div className='flex h-full flex-col justify-center space-y-8 pb-24 text-center'>
                    {navigation.map(({ name, href }) => (
                      <Link
                        key={name}
                        href={href}
                        className={classNames(
                          href.hash === currentSection
                            ? 'pointer-events-none bg-light-gray text-primary-dark'
                            : 'bg-transparent text-white',
                          'rounded-md px-2 py-0 font-serif text-[1.625rem] leading-[3rem] tracking-tight'
                        )}
                        aria-current={
                          href.hash === currentSection ? 'page' : undefined
                        }
                      >
                        <Disclosure.Button className='lowercase'>
                          {name}
                        </Disclosure.Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </Transition.Child>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
