import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function DoctorSuggestionList() {
  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    getDoctorList()
  }, [])

  const getDoctorList = () => {
    GlobalApi.getDoctorList().then(resp => {
      console.log(resp.data.data)
      setDoctorList(resp.data.data)
    }).catch(error => {
      console.error('Failed to fetch doctor list:', error)
    })
  }

  return (
    <div className='p-4 border-[1px] mt-5 md:ml-5'>
      <h2 className='mb-3 font-bold'>Suggestions</h2>
      {doctorList.map((doctor, index) => (
        <Link href={'/details/' + doctor.id} key={index}>
          <div className='mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex items-center gap-3'>
            <Image
              src={doctor.attributes?.image?.data[0]?.attributes?.url}
              width={70}
              height={70}
              alt='doctor-image'
              className='w-[70px] h-[70px] rounded-lg object-cover'
            />
            <div className='mt-3 flex-col flex'>
              <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>{doctor.attributes?.categories?.data[0]?.attributes?.Name}</h2>
              <h2 className='font-medium text-sm'>{doctor.attributes?.Name}</h2>
              <h2 className='text-primary text-xs'>{doctor.attributes?.Years_of_Experience} ans </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default DoctorSuggestionList
