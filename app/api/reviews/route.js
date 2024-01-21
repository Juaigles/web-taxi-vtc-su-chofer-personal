const { default: axios } = require("axios");


const place_id = process.env.PLACE_ID
const apiKey = process.env.API_REVIEWS_KEY

async function handler(){

    const config = {
        method: "get",
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${apiKey}&language=es`,
        headers: {},
    }

    try {
        const res = await axios(config);
        console.log(res.data.result.reviews);

        return new Response(JSON.stringify(res.data.result), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: 'Error al realizar la petición a Google Places' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
};

export {handler as GET, handler as POST};