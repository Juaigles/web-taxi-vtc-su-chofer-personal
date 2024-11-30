const { default: success } = require("@/app/success/page");
const { NextResponse } = require("next/server");

const {token} = body;
const secretKey = process.env.RECAPTCHA_SECRET_KEY
const verificationResponse = await fetch(`https://www.google.com/recaptcha/api/siteveify?secret=${secretKey}&response=${token}`,{method: 'POST'})

const verification = await verificationResponse.json();

if(verification.success && verification.score > 0.5){
  return NextResponse.json({
    success:true, score: verification.score
  })
} else{
  return NextResponse.json({
    success: false,
    score: verification.score,
    erroCodes: verification('error-codes')
  })
}