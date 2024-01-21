"use client"

import { useForm } from "react-hook-form"
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

const Form2 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors)

    const [captcha, setCaptcha] = useState(false)


    const onChange = async (token) => {

        const response = await fetch('/api/captcha', {
            method: 'POST',
            body: JSON.stringify({ recaptchaResponse: token }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        if (response.status == 200) {
            const setData = () => {
                setCaptcha(true)

            }
            setData()

        } else {
            setCaptcha(false)
            alert('Verifica el captcha')
        }

        console.log(data)

    }



    const onSubmit = async (data) => {
        console.log(captcha)
        if (captcha) {
            const JSONdata = JSON.stringify(data);
            const endpoint = '/api/contact';

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            };

            const response = await fetch(endpoint, options);
            const result = await response.json();
            if (result.error) {
                // Redirigir a la página de éxito


            } else {
                window.location.href = '/success';

            }
        } else {
            alert("Completa el captcha para enviar el mensaje")
        }
    }
    return (
        <div className="mx-[4%] md:mx-[8%] md:flex md:justify-center md:items-center md:gap-52 ">
            <div className='   '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.895925765939!2d-5.6517645235768!3d40.961858722281214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f260b0c8df677%3A0xcc8717ecc11e1685!2sRafael%20Iglesias%20Taxi%20VTC%20Salamanca%20Rafael%20Iglesias%20Taxi%20su%20Ch%C3%B3fer%20Personal!5e0!3m2!1ses!2ses!4v1705593474546!5m2!1ses!2ses" width="600" height="600" ></iframe>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid ">
                <h2 className='text-2xl font-semibold md:text-center'>Contacte con nosotros:</h2>
                <label htmlFor="name">Nombre:</label>
                <input type="text"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "El campo de nombre es obligatorio rellenarlo"
                        },
                        minLength: {
                            value: 2,
                            message: "El nombre debe tener al menos 2 caracteres"
                        },
                        maxLength: {
                            value: 20,
                            message: "El nombre debe tener máximo 20 caracteres"
                        },
                    })} className="border my-1.5 p-2"
                />
                { //verificamos si exite el error en name (errors.name?), y cual es (type), (required, minLength, maxLenght etc)  
                    errors.name && <span>{errors.name.message}</span>
                }
                <label htmlFor="email">Email:</label>
                <input type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "El correo es requerido"
                        },
                        pattern: {
                            //expresion regular para comprobar la validez del mail, 
                            //esperamos distintos caracteres alfanúmericos seguidos de un @, luego otro texto, un punto, y un texto final 1que puede ser de 2 a 4 caracteres
                            value: /^[a-z0-9._%+-]+@[a-z0-9·-]+\.[a-z] {2,4}$/,
                            message: "El tipo de correo introducido no es válido"
                        }
                    })} className="border my-1.5 p-2"
                />
                {

                    errors.email && <span>{errors.email.message}</span>
                }
                <label htmlFor="tel">Teléfono:</label>
                <input type="tel"
                    {...register("tel")}
                    className="border my-1.5 p-2"
                />
                <label htmlFor="message">Escribe tu mensaje:</label>
                <input type="textarea"
                    {...register("message", {
                        required: true
                    })} className="border my-1.5 p-2 h-32"
                />
                { //verificamos si exite el error en name (errors.message?), y cual es (type), (required, minLength, maxLenght etc)
                    errors.message?.type == "required" && <span>Rellena este campo antes de enviar el formulario</span>
                }


                <label htmlFor="privacityReaded">
                    <input type="checkbox"
                        {...register("privacityReaded", {
                            required: {
                                value: true,
                                message: "Debes leer y aceptar los términos antes de continuar"
                            }
                        })}
                    />
                    <Link href="/politica-de-privacidad" className='ml-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]'> He leído y aceptado la Política de Privacidad *</Link>
                </label>
                {
                    errors.privacityReaded && <span >{errors.privacityReaded.message}</span>
                }

                <label htmlFor="promoByMail" className=''>
                    <input type="checkbox"
                        {...register("promoByMail")}
                    />
                    <span className="privacityLink ml-2 text-black">Autorizo a contactarme por email o por cualquier medio con fines comerciales</span>
                </label>

                <ReCAPTCHA sitekey={siteKey} onChange={onChange} className="my-4" />
                <button type='submit' className='border my-4 w-full max-w-[40%] md:max-w-[30%] mx-auto text-white bg-black px-8 py-5 hover:bg-[var(--secondary-color)]'>Enviar</button>
            </form>
        </div >
    )
}

export default Form2