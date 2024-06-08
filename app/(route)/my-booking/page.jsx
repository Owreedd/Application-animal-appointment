"use client";

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';


function MyBooking() {
    const { user } = useUser();
    const [bookingList, setBookingList] = useState([])

    useEffect(() => { 
        user && getUserBookingList()
    }, [user])

    const getUserBookingList = () => {
        GlobalApi.getUserBookingList(user?.email).then(resp => {
            console.log('Bookings:', resp.data.data)
            setBookingList(resp.data.data)
        })
    }

    const filterUserBooking = (type) => {
        const result = bookingList.filter(item =>
            type === 'upcoming' ? new Date(item.attributes.Date) >= new Date() :
            new Date(item.attributes.Date) <= new Date()
        )
        console.log('Filtered Results:', result)
        return result
    }

    return (
        <div className='px-4 sm:px-10 mt-10'>
            <h2 className='font-bold text-2xl'>Mes réservations</h2>
            <Tabs defaultValue="account" className="w-full mt-5">
                <TabsList className='w-full justify-start'>
                    <TabsTrigger value="upcoming">A venir</TabsTrigger>
                    <TabsTrigger value="expired">Expirer</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <BookingList bookingList={filterUserBooking('upcoming')} 
                    expired={false}
                    updateRecord={getUserBookingList}
                    />
                </TabsContent>
                <TabsContent value="expired">
                    <BookingList bookingList={filterUserBooking('expired')} 
                    expired={true}
                    updateRecord={getUserBookingList}

                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MyBooking;
