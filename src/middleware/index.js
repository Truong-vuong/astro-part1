import { sequence } from "astro/middleware";

async function index(_, next) {
    // console.log("index request");
    const response = await next();
    //console.log("index response");
    
    return response;
}

async function about(_, next) {
    //console.log("about request");
    const response = await next();
    //console.log("about response");
    return response;
}

async function greeting(_, next) {
    //console.log("greeting request");
    const response = await next();
    //console.log("greeting response");
    return response;
}

export const onRequest = sequence(index, about, greeting);