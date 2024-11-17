import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parseamos el token de reCAPTCHA desde el cuerpo de la solicitud
    const { recaptchaResponse } = await req.json();
    const secretKey = process.env.SECRET_KEY; // La clave secreta de reCAPTCHA

    // Enviamos el token a la API de verificación de Google
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${recaptchaResponse}`,
      }
    );

    const data = await response.json(); // Parseamos la respuesta JSON de Google

    console.log("Respuesta de reCAPTCHA:", data); // Para depuración

    // Validamos el resultado de la verificación
    if (data.success) {
      return new NextResponse(
        JSON.stringify({ success: true, message: "CAPTCHA verificado correctamente" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "CAPTCHA no válido",
          errors: data["error-codes"], // Incluimos los errores de Google si los hay
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error verificando CAPTCHA:", error);

    // Manejamos errores inesperados
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Error interno al verificar CAPTCHA",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
