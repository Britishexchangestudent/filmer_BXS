/* eslint-disable import/no-named-as-default */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, Movies, MovieInformation, Profile, Navbar } from './index';

// eslint-disable-next-line import/no-named-as-default
// eslint-disable-next-line import/no-named-as-default-member
import useStyles from './styles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>

          <Route path="/movies/:id" exact>
            <MovieInformation />
          </Route>
          <Route path="/actors/:id" exact>
            <Actors />
          </Route>
          <Route path="/profile/:id" exact>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
