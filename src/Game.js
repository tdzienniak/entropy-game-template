import Entropy from 'entropy.js';
import { State as EntropyStatePlugin } from 'entropy.js-plugins';

const systems = [];
const requireSystems = require.context('./systems');
requireSystems.keys().forEach((file) => {
  systems.push(requireSystems(file));
});

const entities = [];
const requireEntities = require.context('./entities');
requireEntities.keys().forEach((file) => {
  entities.push(requireEntities(file));
});

const components = [];
const requireComponents = require.context('./components');
requireComponents.keys().forEach((file) => {
  components.push(requireComponents(file));
});

import * as states from './states';

window.addEventListener('load', () => {
  Entropy.registerPlugin(EntropyStatePlugin);

  const game = Entropy({
    pauseOnHide: true,
  });

  Object.keys(states).forEach((stateName) => {
    game.defineState(states[stateName]);
  })

  // for easier debugging
  window.game = game;

  game.registerComponents(components);
  game.registerEntities(entities);
  game.registerSystems(systems);

  game.state.change('Initial');
});
