import React, { Component } from "react";

import { moviesSearch } from "../../Helpers/movies-api";
import queryString from "query-string";
import MoviesList from "../../Components/Movies/Movies";

class MoviesPage extends Component {
  state = {
    query: "",
    searchMovies: [],
    loading: false,
    error: null,
  };
  componentDidMount = () => {
    const parsedQuery = queryString.parse(this.props.location.search).query;
    if (parsedQuery) {
      moviesSearch(parsedQuery).then((searchMovies) =>
        this.setState({ searchMovies })
      );
    }
  };
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleInputSubmit = (e) => {
    const { history, location } = this.props;
    const { query } = this.state;

    e.preventDefault();
    this.setState({ loading: true });
    moviesSearch(query)
      .then((searchMovies) => this.setState({ searchMovies }))
      .catch((error) => this.setState({ error }))
      .finally(
        this.setState({ loading: false }),
        history.push({
          ...location,
          search: `?query=${query}`,
        })
      );
  };
  render() {
    const { query, searchMovies, error, loading } = this.state;
    return (
      <>
        <form onSubmit={this.handleInputSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={query}
            name="query"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {error && <p>Error request</p>}
        {loading && <p>Loading...</p>}
        {!loading && !error && <MoviesList movies={searchMovies} />}
      </>
    );
  }
}

export default MoviesPage;
