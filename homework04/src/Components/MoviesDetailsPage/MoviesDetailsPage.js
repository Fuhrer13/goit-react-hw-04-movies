import React, { Component } from "react";
import { getMovieDetails } from "../../Helpers/movies-api";
import { NavLink, Switch, Route } from "react-router-dom";
import Cast from "../../Components/Cast/Cast";
import Review from "../../Components/Review/Review";
import { routes } from "../../Helpers/router";
import classes from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {},
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    getMovieDetails(id).then((movie) => this.setState({ movie }));
  }
  goBack = () => {
    const { location, history } = this.props;
    if (location.state) {
      return history.push({ ...location.state.from });
    }
    history.push("/");
  };
  render() {
    const {
      poster_path,
      title,
      vote_average,
      overview,
      genres,
    } = this.state.movie;
    const { match } = this.props;

    return (
      <div className={classes.container}>
        <button type="button" onClick={this.goBack} className={classes.btn}>
          &larr; Go back
        </button>
        <section className={classes.movieInfoBoard}>
          <div>
            {poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                alt=""
              />
            )}
          </div>
          <div className={classes.movieInfo}>
            <h1>{title}</h1>
            <p>User score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres &&
              genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
          </div>
        </section>
        <p>Additional information</p>
        <ul className={classes.list}>
          <li>
            <NavLink to={`${match.url}${routes.MOVIE_CAST}`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}${routes.MOVIE_REVIEWS}`}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path={`${match.url}${routes.MOVIE_CAST}`}
            render={(props) => <Cast {...props} id={match.params.id} />}
          />
          <Route
            path={`${match.url}${routes.MOVIE_REVIEWS}`}
            render={(props) => <Review {...props} id={match.params.id} />}
          />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
