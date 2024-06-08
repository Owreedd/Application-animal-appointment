import { Resend } from 'resend';
import { Email} from '@/email'
import { NextResponse } from 'next/server';
import EmailTemplate from '@/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req){
    const response=req.json()
    try{
        const data = await resend.emails.send({
            from: 'Doctor-Appointment-Booking',
            to: [response.data.Email],
            subject: 'Confirmation de votre reservation',
            react: EmailTemplate ({response}) 
          });
        return NextResponse.json({data})

    }
    catch(error)
    {
        return NextResponse.json({error})
    }
}