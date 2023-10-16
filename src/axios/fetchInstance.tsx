import axios from "axios"
const BASE_URL = 'https://api.themoviedb.org/3/' as const
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjViYzUyODJiZWY3NzgxNWY4OWVkZTJhZWZlMmVhMCIsInN1YiI6IjY1MjU1NTgyNjI5YjJjMDBlMjY1MDM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JjwvDaGLWC4Xa8jCp12FXVMYgiOQ5ShkGg2pktGWpVM' as const

const instance = axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${ACCESS_TOKEN}`
    }
})

export {instance}