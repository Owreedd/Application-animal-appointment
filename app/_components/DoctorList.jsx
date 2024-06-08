import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useUser, SignInButton } from '@clerk/nextjs' // Utilisation du composant SignInButton de Clerk

function DoctorList({ doctorList, heading }) {
  const { isSignedIn } = useUser(); // Utilisation de useUser pour vérifier l'authentification

  const handleReserveClick = (e) => {
    if (!isSignedIn) {
      e.preventDefault(); // Empêche la navigation si l'utilisateur n'est pas connecté
    }
  };

  return (
    <div className='mb-10 px-8'>
      <h2 className='font-bold text-xl'>{heading || 'Popular Doctors'}</h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 mt-4'>
        {doctorList && doctorList.length > 0 ? doctorList.map((doctor, index) => (
          <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:border-black hover:shadow-sm transition-all ease-in-out' key={index}>
            <Image src={doctor.attributes.image.data[0].attributes.url} alt='doctor' width={500} height={100} className='h-[200px] w-full object-cover rounded-lg' />
            <div className='mt-3 items-baseline flex flex-col gap-1'>
              <h2 className='text-[10px] bg-blue-500 p-1 rounded-full px-2 text-black'>
                {doctor.attributes?.categories?.data[0]?.attributes?.Name}
              </h2>
              <h2 className='font-bold'>
                {doctor.attributes.Name}
              </h2>
              <h2 className='text-primary text-sm'>
                {doctor.attributes?.Years_of_Experience} ans
              </h2>
              <h2 className='text-gray-500 text-sm'>
                {doctor.attributes?.Address}
              </h2>
              {isSignedIn ? (
                <Link href={'/details/' + doctor.id} legacyBehavior>
                  <a onClick={(e) => handleReserveClick(e)} className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>
                    Reservez maintenant
                  </a>
                </Link>
              ) : (
                <SignInButton>
                  <a className='p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white'>
                    Reservez maintenant
                  </a>
                </SignInButton>
              )}
            </div>
          </div>
        ))
          : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className='border-[1px] rounded-lg p-3' key={index}>
              <div className='h-[200px] w-full text-primary animate-pulse rounded-lg'></div>
              <div className='mt-3 space-y-2'>
                <div className='h-4 bg-slate-200 rounded-full w-1/4 animate-pulse'></div>
                <div className='h-6 bg-slate-200 rounded-full w-3/4 animate-pulse'></div>
                <div className='h-4 bg-slate-200 rounded-full w-1/2 animate-pulse'></div>
                <div className='h-4 bg-slate-200 rounded-full w-full animate-pulse'></div>
                <div className='h-8 bg-slate-200 rounded-full w-full animate-pulse'></div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorList
