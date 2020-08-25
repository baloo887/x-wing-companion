const CONFIGURATION_ID = 18;

export function getSquadron(state) {
  return state.squadron;
}

export function getUpgrades(state) {
  return (i) => state.squadron.deck[i].slots
    .filter((item) => !item.upgrade_types.includes(CONFIGURATION_ID));
}

export function getConfigurations(state) {
  return (i) => state.squadron.deck[i].slots
    .filter((item) => item.upgrade_types.includes(CONFIGURATION_ID));
}
