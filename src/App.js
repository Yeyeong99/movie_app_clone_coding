import React from "react";
import axios from "axios";
import Movie from "./Movie";
import Carousel from "react-material-ui-carousel";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
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
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <Carousel
            className="movies"
            autoPlay={false}
            navButtonsAlwaysVisible={true}
          >
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </Carousel>
        )}
      </section>
    );
  }
}
export default App;
