import axios from "axios";

export async function apiGet(){
    const base_url = "https://portfolio-js.b.goit.study"
    const end_point = "/api/reviews"
    const url = `${base_url}${end_point}`

    const res = await axios.get(url).then(response => response.json).catch(console.error());
    
    return res
    
}

// export async function apiPost(){
//     const base = "https://portfolio-js.b.goit.study"
//     const end = "/api/requests"
//     const url = `${base}${end}`

//     const res = await axios.post(url).then(response => response.json).catch(error => console.log(error));
    
//     return res
    
// }
