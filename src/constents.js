export const navLinks = ["Home", "TV Shows", "Movies", "My List"];
export const API_KEY = "77fe1b32a07917a3c58ccb64f21e48dc";

export const baseUrl = "https://api.themoviedb.org/3";
export const baseImage = "https://image.tmdb.org/t/p/original/";
export const banner_url = `${baseUrl}/trending/all/day?api_key=${API_KEY}&language=en-US`;

export const genres = [
    { title: "Popular On Netflix", link: `${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US` },
    { title: "Horror Movies", link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27` },
    { title: "Only On Netflix", link: `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213` },
    { title: "Trending Now", link: `${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US` },
    { title: "Comedies", link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35` },
    { title: "Action", link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28` },
    { title: "Romance", link: `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749` },
];

export const trialer_base_url = "https://api.themoviedb.org/3/movie/";
