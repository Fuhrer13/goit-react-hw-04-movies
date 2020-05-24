import React, { Suspense, lazy } from 'react';
import NavBar from './Components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import { routes } from './Helpers/router';

const HomePage = lazy(() => import('./Page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Page/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./Page/MoviesDetailsPage/MoviesDetailsPage'),
);

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.MOVIES} component={MoviesPage} />
          <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
