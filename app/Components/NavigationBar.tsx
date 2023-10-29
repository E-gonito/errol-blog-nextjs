'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link'
import Image from 'next/image'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useAuth0 } from "@auth0/auth0-react";

const navigation = [
  { name: 'Characters', href: '/pages/Characters' },
  { name: 'Light Cones', href: '/pages/LightCones' },
  { name: 'Teams', href: '/pages/Teams' },
  { name: 'Tier List', href: '/pages/TierList' },
  { name: 'Videos', href: '/pages/Videos' },
  { name: 'Art', href: '/pages/Art' },
  { name: 'Tools', href: '/pages/Tools' },
]

function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { loginWithRedirect, logout} = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 50);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header style={{ 
        backgroundColor: isScrolled ? 'rgba(38, 38, 38,, 0.8)' : 'rgba(38, 38, 38,, 1)', 
        transition: 'background-color 0.5s ease', 
        position: 'sticky', 
        top: 0, 
        zIndex: 10,
        backdropFilter: 'blur(20px)', 
        height: '85px',
      }}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <Image 
                className="h-12 w-auto" 
                src="https://hsr.keqingmains.com/wp-content/uploads/2023/09/Bailu_Sticker_03.webp" 
                alt="" 
                width={256} 
                height={256} 
              />
            </a>
            <Link href="/">
              <p className="text-xl text-white-900 pl-2 font-bold">Star Rail Realm</p>
            </Link>
          </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <p className="text-sm font-semibold leading-6 text-white-900 hover:text-blue-500">
              {item.name}
            </p>
          </Link>
        ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        {!isAuthenticated &&
          <button 
            onClick={() => loginWithRedirect()} 
            className="text-sm font-semibold leading-6 text-white-900 hover:text-blue-500"  
          >
              Log in <span aria-hidden="true">&rarr;</span>
          </button> }
          <div className="flex flex-col items-center h-8">
          {isAuthenticated && (
            <>
              <img className="h-8 w-auto" src={user.picture} alt={user.name} />
              <h1 className="text-sm font-semibold leading-6 text-gray-900">{user.name}</h1>
            </>
          )}
        </div>
        {isAuthenticated && 
          <div className = "flex flex-row items-center">
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-500"
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div> }
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image 
                className="h-12 w-auto" 
                src="https://hsr.keqingmains.com/wp-content/uploads/2023/09/Bailu_Sticker_03.webp" 
                alt="" 
                width={256} 
                height={256} 
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
  </header>
  )
}

export default NavigationBar;