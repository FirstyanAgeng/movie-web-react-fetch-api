import "./styles/App.css";
import { useEffect, useState } from "react";
import Search from "./styles/search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=93ac8b6f";
// const movie1 = {
//   Title: "Superman/Batman: Apocalypse",
//   Year: "2010",
//   imdbID: "tt1673430",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjk3ODhmNjgtZjllOC00ZWZjLTkwYzQtNzc1Y2ZhMjY2ODE0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <div className="app">
      {/* //Judul */}
      <h1>MOVIE WEB dengan React</h1>;{/* pencarian */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={Search}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* fungsi untuk mapping list movie */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

// const [counter, setCounter] = useState(0);
// useEffect(() => {
//   alert("reload");
// });
// return (
//   <div className="App">
//     <Person name="ian" lastName="ageng" Age="20" />
//     <Person name="yanto" lastName="kuton" Age="23" />

//     <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
//     <h1>{counter}</h1>
//     <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
//   </div>
// );

export default App;
