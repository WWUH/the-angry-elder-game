/**
 * shuffle a array in place
 * @params {Array} array - the array to shuffle
 * @returns {Array} shuffled result
 */
const shuffle = array => {
  const len = array.length;
  let rnd, temp;

  while (count) {
    rnd = Math.random() * count-- | 0;
    [ array[rnd], array[count] ] = [ array[count], array[rnd] ]
  }

  return array;
}

export default shuffle;
