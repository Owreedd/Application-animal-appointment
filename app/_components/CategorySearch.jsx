"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React, { useEffect } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import { get } from 'http'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {
    const [categoryList, setCategoryList] = React.useState([])
    useEffect(()=>{
getCategoryList()
    },[]
    )
    const getCategoryList=()=>{
        GlobalApi.getCategory().then(resp=>{console.log(resp)
        setCategoryList(resp.data.data)
        })
    }
  return (
    <div className='mb-10 items-center px-5 flex flex-col gap-4'>
        <h2 className='font-bold text-4xl tracking-wide'>Rechercher un Service pour Votre <span className='text-primary'>Animal</span></h2>
      <h2 className='text-gray-500 text-xl'>Cherchez un Service pour Votre Animal et Réservez en Quelques Clics</h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Rechercher ..." />
      <Button type="submit"> <Search className='h-4 w-4 mr-2'/> Rechercher</Button>
    </div>
    <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
    {categoryList.map((item, index) => index<6&&(
        <Link href={'/search/'+ item.attributes?.Name} key={index} className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out'>
            <Image src={item.attributes?.Icon?.data.attributes?.url} alt='icon' width={40} height={40}/>
            <label className='text-blue-600 text-sm'>{item.attributes?.Name}</label>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default CategorySearch
