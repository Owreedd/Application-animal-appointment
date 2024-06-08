'use client'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

function Header() {
    const Menu = [
        {
            id: 1,
            name: 'Acceuil',
            link: '/'
        },
        {
            id: 2,
            name: 'Découvrez',
            link: '/discover'
        },
        {
            id: 3,
            name: 'Contactez nous',
            link: '/contact'
        },
    ];

    const { user } = useUser();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className='flex items-center justify-between p-4 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src='/logo.svg' alt='logo' width={180} height={80} style={{ width: 'auto', height: 'auto' }} />
                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item) => (
                        <Link key={item.id} href={item.link}>
                            <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <SignedIn>
                <Popover>
                    <PopoverTrigger>
                        {user && user.profileImageUrl ? (
                            <Image 
                                src={user.profileImageUrl} 
                                alt='profile-image' 
                                width={50} 
                                height={50} 
                                className='rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out' 
                            />
                        ) : (
                            <div 
                                className='flex items-center p-2 justify-center w-24 h-12 bg-blue-600  text-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-all ease-in-out' 
                            >
                                Mon compte
                            </div>
                        )}
                    </PopoverTrigger>
                    <PopoverContent className="mt-2">
                        <ul className='flex flex-col'>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                <UserButton />
                            </li>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                <Link href={'/my-booking'}>
                                    Mes Reservations
                                </Link>
                            </li>
                            <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                <Link href='/profil'>
                                    Mon profil
                                </Link>
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <Button>Commencer</Button>
                </SignInButton>
            </SignedOut>
        </div>
    );
}

export default Header;
