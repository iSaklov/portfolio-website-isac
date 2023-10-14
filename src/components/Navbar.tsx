'use client'

import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/images/logo.svg'
import LogoWhite from '@/assets/images/logo-white.svg'
import { time } from 'console'

const navigation = [
  { name: 'Projects.', href: { pathname: '/', hash: 'projects' } },
  { name: 'Tech stack.', href: { pathname: '/', hash: 'tech-stack' } },
  { name: 'À propos.', href: { pathname: '/', hash: 'about' } },
  { name: 'Contacts.', href: { pathname: '/', hash: 'contacts' } },
  { name: 'Etc.', href: { pathname: '/', hash: '#' } }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    console.log('isMenuOpen', isMenuOpen)
    if (isMenuOpen && document) {
      document.body.classList.add('overflow-hidden')
    } else if (document !== null) {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  useEffect(() => {
    console.log('currentSection', currentSection)
  }, [currentSection])

  const handleScroll = () => {
    if (document !== null) {
      const sections = document.querySelectorAll('section')
      let currentSectionValue = ''

      sections.forEach((section) => {
        const top = section.offsetTop
        const bottom = top + section.clientHeight

        if (window.scrollY >= top && window.scrollY < bottom) {
          currentSectionValue = `#${section.id}`
        }
      })

      setCurrentSection(currentSectionValue)
    }
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Disclosure as='nav' className='fixed w-full sm:bg-white'>
      {({ open }) => (
        <>
          {open ? setIsMenuOpen(true) : setIsMenuOpen(false)}
          <div className='container mx-auto flex max-w-7xl items-center justify-center'>
            <div className='absolute right-2 top-2 flex items-center sm:hidden'>
              {/* Mobile menu button*/}
              <Disclosure.Button className='relative z-50 inline-flex items-center justify-center rounded-md p-2 text-primary-dark hover:bg-primary-dark-translucent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                <span className='absolute -inset-0.5' />
                {/* <span className='sr-only'>Open main menu</span> */}
                <span className='sr-only'>Ouvrir le menu principal</span>
                {open ? (
                  <XMarkIcon
                    className='block h-10 w-10 text-white'
                    aria-hidden='true'
                  />
                ) : (
                  <Bars3Icon className='block h-10 w-10' aria-hidden='true' />
                )}
              </Disclosure.Button>
            </div>
            <div className='hidden w-full flex-col items-center justify-center gap-5 px-2 py-5 sm:flex'>
              {/* Logo */}
              <div>
                <Link href='/'>
                  <Image
                    src={Logo}
                    alt='iSac Development'
                    className='h-[90px] w-auto'
                  />
                </Link>
              </div>
              {/* Navigation Links */}
              <div className='flex w-full justify-evenly'>
                {navigation.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className={classNames(
                      `#${href.hash}` === currentSection
                        ? 'bg-primary-dark text-white hover:cursor-default'
                        : 'text-primary-dark hover:text-accent-orange',
                      '__nav-link rounded-md px-3 py-0 lowercase'
                    )}
                    aria-current={
                      `#${href.hash}` === currentSection ? 'page' : undefined
                    }
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Transition>
            <Disclosure.Panel className='h-screen w-screen sm:hidden'>
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
                className='h-full w-full'
              >
                <div className='absolute inset-y-0 right-0 flex h-full w-4/5 min-w-[320px] flex-col items-center gap-14 bg-primary-dark py-14'>
                  <div>
                    <Link href='/'>
                      <Disclosure.Button>
                        <Image
                          src={LogoWhite}
                          alt='iSac Development'
                          className='h-[90px] w-auto'
                        />
                      </Disclosure.Button>
                    </Link>
                  </div>
                  <div className='flex h-full flex-col justify-center space-y-8 pb-24 text-center'>
                    {navigation.map(({ name, href }) => (
                      <Link
                        key={name}
                        href={href}
                        className={classNames(
                          `#${href.hash}` === currentSection
                            ? 'bg-light-gray text-primary-dark'
                            : 'bg-transparent text-white',
                          '__nav-link rounded-md px-2 py-0'
                        )}
                        aria-current={
                          `#${href.hash}` === currentSection
                            ? 'page'
                            : undefined
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
