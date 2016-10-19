import {
  Route,
  Router,
  browserHistory,
} from 'react-router';

import App from './app';
import {
  HomeView,
} from '../views';
import React from 'react';
import {render}             from 'react-dom';

function run() {
  render(
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomeView} />
      </Route>
    </Router>,
    document.getElementById('app')
  );
}

const loadedStates = ['complete', 'loaded', 'interactive'];
if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
