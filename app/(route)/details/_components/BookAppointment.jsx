import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { CalendarDays, Clock } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookAppointment({ doctor }) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState();
    const { user } = useUser();

    useEffect(() => {
        getTime();
    }, []);

    const getTime = () => {
        const timeList = [];
        for (let i = 8; i < 16; i++) {
            timeList.push({
                time: i + ":00",
            });
            timeList.push({
                time: i + ":30",
            });
        }
        for (let i = 16; i < 18; i++) {
            timeList.push({
                time: i + ":00",
            });
            timeList.push({
                time: i + ":30",
            });
        }
        timeList.push({
            time: "18:30",
        });
        setTimeSlot(timeList);
    };

    const saveBooking = () => {
        const data = {
            data: {
                UserName: user.firstName + " " + user.lastName,
                Email: user.emailAddresses[0].emailAddress,
                Time: selectedTimeSlot,
                Date: date,
                doctor: doctor.id,
            },
        };
        GlobalApi.BookAppointment(data)
            .then((resp) => {
                if (resp) {
                    GlobalApi.sendEmail(data).then((resp) => { console.log(resp) });
                    toast.success("Rendez-vous réservé avec succès");
                }
            })
            .catch((error) => {
                toast.error("Erreur lors de la réservation du rendez-vous");
            });
    };

    const isPastDay = (day) => {
        return day < new Date();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="mt-3 rounded-full">Reserver un rendez-vous</Button>
            </DialogTrigger>
            <DialogContent className="p-4 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Prendre un rendez-vous</DialogTitle>
                    <DialogDescription>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                            <div className="flex flex-col gap-3 items-baseline">
                                <h2 className="flex gap-2 items-center">
                                    <CalendarDays className="text-primary h-5 w-5" />
                                    Choisissez une date
                                </h2>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border"
                                    disabled={isPastDay}
                                />
                            </div>
                            <div className="flex flex-col gap-3 lg:mt-0">
                                <h2 className="flex gap-2 items-center">
                                    <Clock className="text-primary h-5 w-5" />
                                    Choisissez l'heure de votre réservation
                                </h2>
                                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-2 border rounded-lg p-3">
                                    {timeSlot &&
                                        timeSlot.map((item, index) => (
                                            <span
                                                key={index}
                                                onClick={() => setSelectedTimeSlot(item?.time)}
                                                className={`p-2 border border-gray-300 rounded-md text-center hover:bg-primary hover:text-white cursor-pointer ${
                                                    item.time === selectedTimeSlot ? 'bg-primary text-white' : ''
                                                }`}
                                            >
                                                {item?.time}
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end mt-5">
                    <DialogClose asChild>
                        <Button className="text-red-500 border-red-50" type="button" variant="outline">
                            Fermer
                        </Button>
                    </DialogClose>
                    <Button type="button" disabled={!(date && selectedTimeSlot)} onClick={saveBooking}>
                        Réserver
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default BookAppointment;
