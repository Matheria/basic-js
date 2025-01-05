const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let initials = members
    .filter(member => typeof member === 'string')
    .map(member => member.trim()[0].toUpperCase());

  // Sort the initials alphabetically
  initials.sort();

  // Concatenate the sorted initials to form the team name
  let teamName = initials.join('');

  // Return the team name or false if there are no valid members
  return teamName || false;
}

module.exports = {
  createDreamTeam
};
