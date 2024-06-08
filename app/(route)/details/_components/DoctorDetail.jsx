import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import BookAppointment from './BookAppointment';

function DoctorDetail({doctor}) {
    const socialMediaList = [
        {
            id: 1,
            icon: '/youtube.png',
            url: ''
        },
        {
            id: 2,
            icon: '/facebook.png',
            url: ''
        },
        {
            id: 3,
            icon: '/twitter.png',
            url: ''
        },
        {
            id: 4,
            icon: '/linkedin.png',
            url: ''
        }
    ];

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg'>
            {/* docteur image */}
            <div>
                <Image 
                    src={doctor.attributes.image.data[0].attributes.url} 
                    width={200} 
                    height={200} 
                    alt='doctor-image'
                    className='rounded-lg w-full h-[280px] object-cover'
                />
            </div>
            {/* docteur infos */}
            <div className='col-span-2 mt-5 flex md:px-10 flex-col gap-3 items-baseline'>
                <h2 className='font-bold text-2xl'>
                    {doctor.attributes?.Name}
                </h2>
                <h2 className='flex gap-2 text-gray-500 text-md'>
                    <GraduationCap />
                    <span>{doctor.attributes?.Years_of_Experience} d'éxperiences</span>
                </h2>
                <h2 className='text-md flex gap-2 text-gray-500'>
                    <MapPin />
                    <span>
                        {doctor.attributes?.Address}
                    </span>
                </h2>
                <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                    {doctor.attributes?.categories?.data[0]?.attributes?.Name}
                </h2>
                <div className='flex gap-3'>
                    {socialMediaList.map((item) => (
                        <Image 
                            src={item.icon} 
                            key={item.id}
                            width={30} 
                            height={30}
                            alt={`social-media-icon-${item.id}`}
                        />
                    ))}
                </div>
                <BookAppointment doctor={doctor}/>
            </div>
            
        </div>
        <div>
            <div className='p-3 border-[1px] rounded-lg mt-5'>
                <h2 className='font-bold text-[20px]'>A propos de moi</h2>
                <p className='text-gray-500 tracking-wide mt-2'>{doctor.attributes?.About}</p>
            </div>
        </div>
        </>
    );
}

export default DoctorDetail;
