const { default: axios } = require("axios");

// Variables de entorno para Google Places
const place_id = process.env.PLACE_ID;
const apiKey = process.env.API_REVIEWS_KEY;

async function handler(req) {
    const config = {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${apiKey}&language=es`,
        headers: {},
    };

    try {
        // Realizar la solicitud a Google Places
        const res = await axios(config);

        // Verificar si las reseñas y el rating están disponibles
        if (res.data.result && res.data.result.reviews) {
            const { reviews, rating } = res.data.result;

            // Responder con las reseñas y el rating
            return new Response(
                JSON.stringify({ reviews, rating }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    status: 200,
                }
            );
        } else {
            // Manejo en caso de que no haya reseñas disponibles
            console.error("No hay reseñas disponibles", res.data);
            return new Response(
                JSON.stringify({ error: "No hay reseñas disponibles" }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    status: 404,
                }
            );
        }
    } catch (error) {
        console.error("Error al obtener datos de Google Places:", error);
        return new Response(
            JSON.stringify({ error: "Error al obtener datos de Google Places" }),
            {
                headers: { 'Content-Type': 'application/json' },
                status: 500,
            }
        );
    }
}

export { handler as GET, handler as POST };
