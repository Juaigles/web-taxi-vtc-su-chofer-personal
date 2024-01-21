
import { NextResponse } from "next/server";


export async function POST(req){

    const responseKey = await req.json();
    const secretKey = process.env.SECRET_KEY;

    
    //verificamos la respuesta de reCAPTCHA
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${responseKey.recaptchaResponse}`, { method: 'POST' });
    const data = await response.json()

    console.log('<',data)
    if(data.success){
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            statusText: "Verificacion de captcha correcta",
            headers: {
              'Content-Type': 'application/json',
            },
          });
        
    } else {
        return new NextResponse(JSON.stringify({ status: 'Verificacion de captcha fallida' }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
            },
          });
    }
}