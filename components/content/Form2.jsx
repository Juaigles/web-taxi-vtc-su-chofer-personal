"use client"

import { useForm, useState} from "react-hook-form";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import ReCaptchaProvider from "../banners/ReCaptchaProvider";

const Form2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {executeRecaptcha} = useGoogleReCaptcha();
    console.log(errors);



     
 
    const onSubmit = async (data) => {
   
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
            // Handle error
        } else {
            handleSubmit
            window.location.href = '/success';
        }
    
    };

    const handdleSubmit = async (e) => {
        e.preventDefault();

        if(!executeRecaptcha){
            return;
        }
        const token = await executeRecaptcha("form_submit")
        const response = await fetch('/api/captcha',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({token})
        })

        const data = await response.json()

        if(data.success){
            console.log('reCAPTCHA verification success:', data);
          onSubmit(e)
        }else{
            console.log('reCAPTCHA verification failed',data);
        }
     }


    return (
        <div className="mx-[8%] md:mx-[8%] grid md:grid-cols-2 md:justify-center md:items-center md:gap-52 mt-5">
            <div className="my-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3012.8682672910372!2d-5.6541556!3d40.9624646!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f398d17758067%3A0xf7acd85efa04d61e!2sTaxi%20Su%20Chofer%20Personal!5e0!3m2!1ses!2ses!4v1706110751627!5m2!1ses!2ses"
                    width="100%"
                    height="450"
                ></iframe>
            </div>


            <form onSubmit={handdleSubmit} className="grid">
                <h2 className="text-2xl font-semibold md:text-center">Contacte con nosotros:</h2>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    {...register("name", {
                        required: {
                            value: true,
                            message: "El campo de nombre es obligatorio rellenarlo",
                        },
                        minLength: {
                            value: 2,
                            message: "El nombre debe tener al menos 2 caracteres",
                        },
                        maxLength: {
                            value: 20,
                            message: "El nombre debe tener máximo 20 caracteres",
                        },
                    })}
                    className="border my-1.5 p-2"
                    />
                {errors.name && <span>{errors.name.message}</span>}
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "El correo es requerido",
                        },
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "El tipo de correo introducido no es válido",
                        },
                    })}
                    className="border my-1.5 p-2"
                    />
                {errors.email && <span>{errors.email.message}</span>}
                <label htmlFor="tel">Teléfono:</label>
                <input type="tel" {...register("tel")} className="border my-1.5 p-2" />
                <label htmlFor="message">Escribe tu mensaje:</label>
                <input
                    type="textarea"
                    {...register("message", {
                        required: true,
                    })}
                    className="border my-1.5 p-2 h-32"
                    />
                {errors.message?.type == "required" && <span>Rellena este campo antes de enviar el formulario</span>}

                <label htmlFor="privacityReaded">
                    <input
                        type="checkbox"
                        {...register("privacityReaded", {
                            required: {
                                value: true,
                                message: "Debes leer y aceptar los términos antes de continuar",
                            },
                        })}
                        />
                    <Link
                        href="/politica-de-privacidad"
                        className="ml-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
                        >
                        {" "}
                        He leído y aceptado la Política de Privacidad *
                    </Link>
                </label>
                {errors.privacityReaded && <span>{errors.privacityReaded.message}</span>}

                <label htmlFor="promoByMail" className="">
                    <input type="checkbox" {...register("promoByMail")} />
                    <span className="privacityLink ml-2 text-black">
                        Autorizo a contactarme por email o por cualquier medio con fines comerciales
                    </span>
                </label>

    
                
                <button
                    type="submit"
                    className="border my-4 w-full max-w-[40%] md:max-w-[30%] mx-auto text-white bg-black px-8 py-5 hover:bg-[var(--secondary-color)]"
                    >
                    Enviar
                
                </button>
            </form>
        </div>
    );
};

export default Form2;
