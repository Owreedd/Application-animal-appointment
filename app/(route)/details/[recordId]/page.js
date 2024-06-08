"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect,useSate, useState } from 'react'
import DoctorDetail from '../_components/DoctorDetail'
import { Dot } from 'lucide-react'
import DoctorSuggestionList from '../_components/DoctorSuggestionList'

function Details({params}) {
  const [doctor, setDoctor] = useState()
  useEffect(() => { getDoctorById() }, [])
    const getDoctorById=()=>{
     GlobalApi.getDoctorById(params.recordId).then(resp=>{
        setDoctor(resp.data.data)
      })
    
    }



    return (
    <div className='p-5 md:px-20'>
      

      <div className='grid grid-cols-1 md:grid-cols-4'>
      {/*docteur details*/} 
       
        <div className='col-span-3'>
        {doctor&&  <DoctorDetail doctor={doctor} />}
      
        </div>
        {/*docteur suggestions*/}
        <div>
<DoctorSuggestionList/>
        </div>
      </div>
    </div>
      
)
}

export default Details
