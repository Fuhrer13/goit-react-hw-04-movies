import React, { Component } from 'react';
import { getMovieCast, smallImgLink } from '../../Helpers/movies-api';

class Cast extends Component {
  state = {
    actors: [],
    error: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });

    getMovieCast(this.props.id)
      .then(actors => this.setState({ actors }))
      .catch(error => this.setState({ error }))
      .finally(this.setState({ loading: false }));
  }
  render() {
    const { actors, error, loading } = this.state;

    return (
      <>
        {error && <p>Error request</p>}
        {loading && <p>Loading...</p>}
        {!loading && !error && (
          <ul>
            {actors.map(actor => (
              <li key={actor.id}>
                {actor.profile_path && (
                  <img src={`${smallImgLink}${actor.profile_path}`} alt="" />
                )}

                <p>{actor.name}</p>
                <p>Character:{actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
