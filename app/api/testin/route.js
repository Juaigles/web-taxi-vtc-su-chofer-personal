const { default: axios } = require("axios");
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return new Response(JSON.stringify(response.data), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ error: 'Error al realizar la petición' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
