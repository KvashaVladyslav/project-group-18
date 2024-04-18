import axios from "axios";

    const baseUrl = "https://portfolio-js.b.goit.study";

export async function apiGet(){
    const base_url = baseUrl;
    const end_point = "/api/reviews";
    const url = `${base_url}${end_point}`;

    const res = await axios.get(url)
    return res.data
    
}

export async function apiPost(email, comment) {
    const base = baseUrl;
    const end = "/api/requests";
    const url = `${base}${end}`;

    try {
        const response = await axios.post(url, { email, comment });
        return response.data;
    } catch (error) {
        console.error("Error submitting request:", error);
        throw error;
    }
}