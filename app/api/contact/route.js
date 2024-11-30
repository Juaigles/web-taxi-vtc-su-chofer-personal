import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';



const dev_email = process.env.ASSISTANT_EMAIL 
const destination_email = proces.env.DESTINATION_EMAIL
const pass = process.env.EMAIL_PASS

export async function POST(request) {
    const data = await request.json();
    const { name, email, message, phone } = data;
    
  console.log('Datos del formulario:', name, email, message, phone);

  // Aquí puedes añadir la lógica del servidor, como enviar un correo electrónico con Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: dev_email,
        pass,
    },
  });
  
//   const transporter = nodemailer.createTransport(mg(mailgunOptions));
  
  
  // Utiliza 'transporter' para enviar correos electrónicos

  const mailOptions = {
    from: dev_email,
    to: destination_email,
    subject: `Nuevo mensaje de ${name}`,
    text: `Mensaje de ${email}:\n ${message}\n Nombre del cliente: ${name}\n Teléfono de contácto: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(JSON.stringify({ status: 'Correo enviado con éxito' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new NextResponse(JSON.stringify({ status: 'Error al enviar el correo' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  
}
