
import { NextResponse } from "next/server";


const secretKey = process.env.RECAPTCHA_SECRET_KEY

export async function POST(request) {
  try {
    const body = await request.json()
    const verificationResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`,{
      method: 'POST',
      headers:{'Contetn-Type':'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        secret: secretKey,
        response: body.token
      })
    })
    
    const verification = await verificationResponse.json()
    
    if (verification.success && verification.score > 0.5){
      return NextResponse.json({success:true,score:verification.score})
    }else{
      return NextResponse.json({
        success:false,
        score: verification.score,
        errorCodes: verification['error-codes'],
      })
    }
  }catch (error) {
    return NextResponse.json({success:false, error:'Internal Server Error'}, {status:500});
  }
} 
  