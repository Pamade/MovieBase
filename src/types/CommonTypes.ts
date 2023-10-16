export interface Movie {
    id: number,
    adult: boolean,
    genre_ids: number[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    backdrop_path: string,
    poster_path: string,
}

export interface ResponseItems {
    page: number,
    results: Movie[],
    total_page: number,
    total_results: number
}