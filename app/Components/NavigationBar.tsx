'use client';

import { signIn, signOut } from "next-auth/react";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Blogs', href: '#' },
  { name: 'Photos', href: '#' },
]

function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        <div className="lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className=" text-lg font-semibold leading-6 text-white-900 hover:text-blue-500">
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex lg:gap-x-12 cursor-pointer hover:text-blue-500 pl-12 " onClick={() => signIn()}>
          <a className="text-lg font-semibold leading-6 text-white-900"> Log In </a>
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar;