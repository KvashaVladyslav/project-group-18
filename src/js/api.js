import axios from "axios";

export async function apiGet(){
    const base_url = "https://portfolio-js.b.goit.study"
    const end_point = "/api/reviews"
    const url = `${base_url}${end_point}`

    const res = await axios.get(url)
    return res.data
    
}

export async function apiPost(email, phone) {
    const base = "https://portfolio-js.b.goit.study";
    const end = "/api/requests";
    const url = `${base}${end}`;

    try {
        const response = await axios.post(url, { email, phone });
        return response.data;
    } catch (error) {
        console.error("Error submitting request:", error);
        throw error;
    }
}