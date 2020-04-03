import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <div className="movies">
          {isLoading
            ? "Loading"
            : movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.medium_cover_image}
                  year={movie.year}
                  summary={movie.summary.slice(0,140)}
                  genres={movie.genres}
                />
              ))}
        </div>
      </section>
    );
  }
}

export default App;
