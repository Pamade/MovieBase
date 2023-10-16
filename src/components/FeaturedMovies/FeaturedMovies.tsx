import React from "react";
import styles from "./featuredMovies.module.scss";
import useFetchMoviesOnLoad from "../../hooks/useFetchMoviesOnLoad";
import { Movie } from "../../types/CommonTypes";

function FeaturedMovies({ IMAGE_URL_API }: { IMAGE_URL_API: string }) {
  const { data } = useFetchMoviesOnLoad("movie/popular");
  console.log(data);

  return (
    <div className={styles.featured_container}>
      <h3 className={styles.heading}>Trending</h3>
      <section className={styles.container}>
        {data.slice(0, 10).map((movie) => (
          <FeaturedMovie IMAGE_URL_API={IMAGE_URL_API} movie={movie} />
        ))}
      </section>
    </div>
  );
}

function FeaturedMovie({
  movie,
  IMAGE_URL_API,
}: {
  movie: Movie;
  IMAGE_URL_API: string;
}) {
  return (
    <div className={styles.single_movie}>
      <p className={styles.title}>{movie.title}</p>
      <img className={styles.image} src={IMAGE_URL_API + movie.backdrop_path} />
      <p>{String(movie.release_date)}</p>
    </div>
  );
}

export default FeaturedMovies;
