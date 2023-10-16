import useFetchMoviesOnLoad from "./hooks/useFetchMoviesOnLoad";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import FeaturedMovies from "./components/FeaturedMovies/FeaturedMovies";

const IMAGE_URL_API = "https://image.tmdb.org/t/p/original" as const;

function App() {
  const { data, isLoading } = useFetchMoviesOnLoad("movie/popular");

  const randomPopularMovie = Math.floor(Math.random() * data.length);

  if (isLoading) return <h1>Loading</h1>;
  return (
    <div>
      <Navigation />
      <Header
        IMAGE_URL_API={IMAGE_URL_API}
        popularMovie={data[randomPopularMovie]}
      />
      <main>
        <FeaturedMovies IMAGE_URL_API={IMAGE_URL_API} />
      </main>
    </div>
  );
}

export default App;
