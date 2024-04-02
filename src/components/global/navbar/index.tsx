import React from 'react'
import { SignIn, SignInButton, SignOutButton, UserButton, auth } from '@clerk/nextjs'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'
import { navLinks } from '@/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export const Navbar = async () => {

    const { user } = auth()


    return (
        <nav className='flex justify-between h-16 px-4 items-center'>

            {/* logo */}
            <Link href={'/'} className='flex gap-2' >
                <Image src='/assets/plura-logo.svg' height={35} width={35} alt='plura-logo' quality={100} />
                <h1 className='font-semibold'>Plura</h1>
            </Link>




            {/* links */}
            <div className='hidden md:flex gap-6 items-center' >
                {
                    navLinks.map((link) => <div key={link} className='flex ' >{link}</div>)
                }
            </div>



            <div className='flex gap-3 items-center'>
                {/* login */}
                {
                    user ? <Button > <SignOutButton /> </Button> : <Button ><SignInButton /> </Button>
                }
                {/* themeswitch */}
                <ModeToggle />


            </div>
        </nav>
    )
}

